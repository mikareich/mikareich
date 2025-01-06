import matter from "gray-matter";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import type { JSX } from "react";
import * as z from "zod";
import PostList from "~/components/PostList";
import ProjectList from "~/components/ProjectList";
import Skill from "~/components/Skill";
import SkillList from "~/components/SkillList";
import { PAGES, POSTS } from "~/content/config";

const PAGE_PATH = "./src/content";
const POST_PATH = "./src/content/posts";

const COMPONENTS = {
  Skill,
  SkillList,
  ProjectList,
  PostList,
};

export type ComponentMap = {
  [key: string]: (props: any) => Promise<JSX.Element> | JSX.Element | null;
};

const PAGE_MATTER = z.object({
  pageTitle: z.string(),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    imageSrc: z.string(),
  }),
  components: z.array(z.string()).default([]),
});

export type PageMatter = z.infer<typeof PAGE_MATTER>;

const POST_MATTER = z.object({
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()).default([]),
  }),
  publishedAt: z.date(),
  components: z.array(z.string()).default([]),
});

export type PostMatter = z.infer<typeof POST_MATTER>;

type FileType = "page" | "post";

type Frontmatter<Type extends FileType> = Type extends "page"
  ? PageMatter
  : PostMatter;

type File<Type extends FileType> = {
  components: ComponentMap;
  source: string;
  frontmatter: Omit<Frontmatter<Type>, "components"> & { slug: string };
};

export async function getFileBySlug<Type extends FileType>(
  type: Type,
  slug: string,
): Promise<File<Type> | null> {
  const collection = type === "page" ? PAGES : POSTS;
  const filename = collection.find((file) => file.slug === slug)?.filename;
  if (!filename) return null;

  const location = type === "page" ? PAGE_PATH : POST_PATH;
  const path = resolve(join(location, filename));
  const fileContent = await readFile(path, { encoding: "utf-8" });
  if (!fileContent) return null;

  const { data, content: source } = matter(fileContent);

  const schema = type === "page" ? PAGE_MATTER : POST_MATTER;

  // check for correct format
  schema.parse(data);

  const { components: componentList = [], ...frontmatter } =
    data as Frontmatter<Type>;

  const components = {} as ComponentMap;
  for (const key of componentList) {
    if (key in COMPONENTS) {
      components[key] = COMPONENTS[key as keyof typeof COMPONENTS];
    }
  }

  return {
    frontmatter: { ...frontmatter, slug },
    source,
    components,
  } as File<Type>;
}
