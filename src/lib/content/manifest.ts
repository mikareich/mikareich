import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Route } from "next";
import { processFile } from "./compilation";
import type { ContentData } from "./content-types";
import { APP_FOLDER } from "./paths";

const PAGE_FILENAME = "page.mdx";

export type RouteMetadata = {
  slug: Route;
} & ContentData;

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

  const manifest: RouteMetadata[] = [];

  // parse page.mdx file on current path
  const file = await processFile(join(path, PAGE_FILENAME)).catch(() => null);
  if (file) manifest.push({ slug, ...file.data });

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
    manifest.push(...childRoutes);
  }

  return manifest;
}

export const ROUTE_MANIFEST = await generateRouteManifest();
