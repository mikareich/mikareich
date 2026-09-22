import matter from "gray-matter";
import type { VFile } from "vfile";
import { Validator } from "../validator.ts";
import { CONTENT_TYPE_METADATA } from "./content-types.ts";
import { contentTypePredicate, pathPredicate } from "./predicates.ts";

const validator = new Validator().has(pathPredicate).has(contentTypePredicate);

/**
 * Remark plugin to extract and validate metadata (frontmatter) for respective
 * type.
 */
export default function parseMetadata() {
  return (_: Node, file: VFile) => {
    if (!validator.verify(file)) throw new Error();

    const type = file.data.type;

    const source = Buffer.from(file.value).toLocaleString();
    const { data } = matter(source);
    const metadata = CONTENT_TYPE_METADATA[type].parse(data);

    file.data.metadata = metadata;
  };
}

export const METADATA_PLUGIN_PATH = import.meta.filename;
