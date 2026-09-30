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

export const POST_METADATA_SCHEMA = object({
  title: string(),
  description: string(),
  keywords: array(string()),
  openGraph: object({
    type: literal("article"),
    publishedTime: coerce.date(),
  }),
});

export type PostMetadata = output<typeof POST_METADATA_SCHEMA>;

export const TOC_SCHEMA = array(
  object({
    id: string(),
    depth: number(),
    value: string(),
  }),
);

export type ToC = output<typeof TOC_SCHEMA>;

export const POST_DATA_SCHEMA = object({
  type: literal(CONTENT_TYPE.POST),
  metadata: POST_METADATA_SCHEMA,
  toc: TOC_SCHEMA,
});

export type PostData = output<typeof POST_DATA_SCHEMA>;

export const PAGE_METADATA_SCHEMA = object({
  title: string(),
  description: string(),
  priority: number().default(1),
});

export type PageMetadata = output<typeof PAGE_METADATA_SCHEMA>;

export const PAGE_DATA_SCHEMA = object({
  type: literal(CONTENT_TYPE.PAGE),
  metadata: PAGE_METADATA_SCHEMA,
});

export type PageData = output<typeof PAGE_DATA_SCHEMA>;

export const CONTENT_DATA = union([POST_DATA_SCHEMA, PAGE_DATA_SCHEMA]);

export type ContentData = output<typeof CONTENT_DATA>;
