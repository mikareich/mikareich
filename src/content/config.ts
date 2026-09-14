import { CONTENT_TYPES, type ContentType } from "~/lib/content/content-types";
import { evaluateFile } from "~/lib/content/evaluation";

export const SOCIALS = {
  discord: "https://discordapp.com/users/708739192678514780",
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
} as const;

export const PAGES = {
  "/": await evaluateFile("page", "./about-me.mdx", import.meta.url),
  "/projects": await evaluateFile("page", "./projects.mdx", import.meta.url),
  "/blog": await evaluateFile("page", "./blog.mdx", import.meta.url),
} as const;

export const POSTS = {
  "/unofficial-valorant-api": await evaluateFile(
    "blog",
    "./posts/unofficial-valorant-api.mdx",
    import.meta.url,
  ),
} as const;

export const NOT_FOUND_CONTENT = await evaluateFile(
  "page",
  "./not-found.mdx",
  import.meta.url,
);

export const ERROR_CONTENT = await evaluateFile(
  "page",
  "./error.mdx",
  import.meta.url,
);

export function isDefinedSlug<T extends ContentType>(
  type: T,
  slug: string,
): slug is T extends typeof CONTENT_TYPES.page
  ? keyof typeof PAGES
  : keyof typeof POSTS {
  if (type === CONTENT_TYPES.page) return slug in PAGES;
  else if (type === CONTENT_TYPES.blog) return slug in POSTS;

  throw new Error(`Invalid content type supplied: ${type}.`);
}
