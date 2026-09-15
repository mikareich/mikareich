import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import matter from "gray-matter";
import type { Route } from "next";
import type { output } from "zod";
import {
  CONTENT_TYPE_METADATA,
  CONTENT_TYPES,
  type ContentType,
} from "./content-types";

const APP_FOLDER = resolve(process.cwd(), "src", "app");
const POSTS_FOLDER = join(APP_FOLDER, "blog", "(posts)");
const PAGE_FILENAME = "page.mdx";

type MetadataMap = {
  [T in ContentType]: { type: T } & output<(typeof CONTENT_TYPE_METADATA)[T]>;
};

export type RouteMetadata<T extends ContentType = ContentType> = {
  slug: Route;
} & MetadataMap[T];

/** Extracts and validates metadata from file under path. */
async function getMetadataFromFile(
  path: string,
): Promise<MetadataMap[ContentType] | null> {
  try {
    const source = await readFile(path, { encoding: "utf-8" });
    const { data } = matter(source);

    const type = path.startsWith(POSTS_FOLDER)
      ? CONTENT_TYPES.POST
      : CONTENT_TYPES.PAGE;

    const metadata = CONTENT_TYPE_METADATA[type].parse(data);
    return { type, ...metadata } as MetadataMap[typeof type];
  } catch (e) {
    console.error(`Could not parse file under ${path}.`, e);
    return null;
  }
}

/**
 * Collects route and metadata from mdx pages in give folder.
 * @param [path=APP_FOLDER] Defaults to Next.js's app folder.
 */
async function generateRouteManifest(
  slug: Route = "/",
  path = APP_FOLDER,
): Promise<RouteMetadata[]> {
  // validate that path points to folder
  const children = await readdir(path).catch(() => null);
  if (!children) return [];

  const routes: RouteMetadata[] = [];

  // parse page.mdx file on current path
  const metadata = await getMetadataFromFile(join(path, PAGE_FILENAME));
  if (metadata) routes.push({ slug, ...metadata });

  // recursively iterate over child folders
  for await (const child of children) {
    // TODO: support \[...\] aggregations and \@ slots

    let childSlug: Route;
    // ignore route ignored children
    if (child.startsWith("_")) continue;
    // keep slug for route groups
    else if (child.startsWith("(") && child.endsWith(")")) childSlug = slug;
    // normalize root slugs
    else if (slug === "/") childSlug = `/${child}` as Route;
    // join non-root slugs
    else childSlug = `${slug}/${child}` as Route;

    const childPath = join(path, child);
    const childRoutes = await generateRouteManifest(childSlug, childPath);
    routes.push(...childRoutes);
  }

  return routes;
}

export const ROUTE_MANIFEST = await generateRouteManifest();
