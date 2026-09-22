import type { Node } from "hast";
import type { VFile } from "vfile";
import { array, coerce, literal, number, object, string } from "zod";
import { POSTS_FOLDER } from "../paths.ts";
import { Validator } from "../validator.ts";
import { pathPredicate } from "./predicates.ts";

export const CONTENT_TYPE = {
  POST: "POST",
  PAGE: "PAGE",
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

export const CONTENT_TYPE_METADATA = {
  [CONTENT_TYPE.POST]: object({
    title: string(),
    description: string(),
    keywords: array(string()),
    openGraph: object({
      type: literal("article"),
      publishedTime: coerce.date(),
    }),
  }),
  [CONTENT_TYPE.PAGE]: object({
    title: string(),
    description: string(),
    priority: number().default(1),
  }),
} as const;

const validator = new Validator().has(pathPredicate);

/** Remark plugin that determines content type based on files path. */
export default function parseContentType() {
  return (_: Node, file: VFile) => {
    if (!validator.verify(file)) throw new Error();

    const type = file.path.startsWith(POSTS_FOLDER)
      ? CONTENT_TYPE.POST
      : CONTENT_TYPE.PAGE;

    file.data.type = type;
  };
}

export const CONTENT_TYPE_PLUGIN_PATH = import.meta.filename;
