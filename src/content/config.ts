import { evaluateFile } from "~/lib/content/evaluation";

export const SOCIALS = {
  discord: "https://discordapp.com/users/708739192678514780",
  email: "mikareich0@gmail.com",
  github: "https://github.com/mikareich",
} as const;

export const PAGES = {
  "/": await evaluateFile("page", import.meta.resolve("about-me.mdx")),
  "/blog": await evaluateFile("page", import.meta.resolve("blog.mdx")),
  "/projects": await evaluateFile("page", import.meta.resolve("projects.mdx")),
} as const;

export const POSTS = {
  "/unofficial-valorant-api": await evaluateFile(
    "blog",
    import.meta.resolve("./posts/unofficial-valorant-api.mdx"),
  ),
} as const;

export const NOT_FOUND_CONTENT = await evaluateFile(
  "page",
  import.meta.resolve("not-found.mdx"),
);

export const ERROR_CONTENT = await evaluateFile(
  "page",
  import.meta.resolve("error.mdx"),
);
