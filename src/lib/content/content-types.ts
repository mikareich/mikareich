import { array, coerce, literal, object, string } from "zod";

export const CONTENT_TYPES = {
  POST: "POST",
  PAGE: "PAGE",
} as const;

export type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

export const CONTENT_TYPE_METADATA = {
  [CONTENT_TYPES.POST]: object({
    title: string(),
    description: string(),
    keywords: array(string()),
    openGraph: object({
      type: literal("article"),
      publishedTime: coerce.date(),
    }),
  }),
  [CONTENT_TYPES.PAGE]: object({
    title: string(),
    description: string(),
  }),
} as const;
