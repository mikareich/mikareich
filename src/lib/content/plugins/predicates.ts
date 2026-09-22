import type { VFile } from "vfile";
import type { output } from "zod";
import { Validator } from "../validator.ts";
import {
  CONTENT_TYPE,
  CONTENT_TYPE_METADATA,
  type ContentType,
} from "./content-types.ts";
import { TOC_SCHEMA, type ToC } from "./toc.ts";

export function pathPredicate(file: VFile): file is VFile & { path: string } {
  return typeof file.path === "string";
}

export function contentTypePredicate(
  file: VFile,
): file is VFile & { data: { type: ContentType } } {
  return Object.values(CONTENT_TYPE).some((type) => file.data.type === type);
}

export function metadataPredicate(file: VFile): file is VFile & {
  data: {
    [Type in ContentType]: {
      type: Type;
      metadata: output<(typeof CONTENT_TYPE_METADATA)[Type]>;
    };
  }[ContentType];
} {
  return (
    contentTypePredicate(file) &&
    CONTENT_TYPE_METADATA[file.data.type].safeParse(file.data.metadata).success
  );
}

export function tocPredicate(file: VFile): file is VFile & {
  data:
    | { type: typeof CONTENT_TYPE.POST; toc: ToC }
    | { type: Exclude<ContentType, typeof CONTENT_TYPE.POST> };
} {
  return file.data.type === CONTENT_TYPE.POST
    ? TOC_SCHEMA.safeParse(file.data.toc).success
    : true;
}

export const FINAL_VALIDATOR = new Validator()
  .has(pathPredicate)
  .has(contentTypePredicate)
  .has(metadataPredicate)
  .has(tocPredicate);

export type CompiledVFile =
  typeof FINAL_VALIDATOR extends Validator<infer Shape> ? Shape : never;

export default function validateFile() {
  return (_: Node, file: VFile) => {
    if (!FINAL_VALIDATOR.verify(file)) throw new Error();
  };
}

export const VALIDATION_PLUGIN_PATH = import.meta.filename;
