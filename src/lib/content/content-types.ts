import { array, date, object, string, url } from "zod";

export const CONTENT_TYPES = {
  blog: "blog",
  page: "page",
} as const;

export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

const META_SCHEMA = object({
  title: string(),
  description: string(),
});

export const CONTENT_TYPE_SCHEMAS = {
  [CONTENT_TYPES.blog]: object({
    meta: META_SCHEMA,
    title: string(),
    subtitle: string(),
    imageUrl: url(),
    tags: array(string()),
    publishedAt: date(),
  }),
  [CONTENT_TYPES.page]: object({
    meta: META_SCHEMA,
    title: string(),
    subtitle: string(),
    imageUrl: url(),
  }),
} as const;
