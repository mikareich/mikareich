import {
  array,
  coerce,
  literal,
  number,
  object,
  type output,
  string,
  union,
} from "zod";

export const CONTENT_TYPE = {
  POST: "POST",
  PAGE: "PAGE",
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

export const CONTENT_DATA = object({ path: string() }).and(
  union([
    // post data
    object({
      type: literal(CONTENT_TYPE.POST),
      metadata: object({
        title: string(),
        description: string(),
        keywords: array(string()),
        openGraph: object({
          type: literal("article"),
          publishedTime: coerce.date(),
        }),
      }),
      toc: array(
        object({
          id: string(),
          depth: number(),
          value: string(),
        }),
      ),
    }),
    // page data
    object({
      type: literal(CONTENT_TYPE.PAGE),
      metadata: object({
        title: string(),
        description: string(),
        priority: number().default(1),
      }),
    }),
  ]),
);

export type ContentData = output<typeof CONTENT_DATA>;
