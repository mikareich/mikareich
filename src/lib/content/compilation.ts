import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { createProcessor } from "@mdx-js/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import type { PluggableList } from "unified";
import { VFile } from "vfile";
import { APP_FOLDER } from "./paths.ts";
import parseContentType, {
  CONTENT_TYPE_PLUGIN_PATH,
} from "./plugins/content-types.ts";
import parseMetadata, { METADATA_PLUGIN_PATH } from "./plugins/metadata.ts";
import {
  type CompiledVFile,
  VALIDATION_PLUGIN_PATH,
  default as validateFile,
} from "./plugins/predicates.ts";
import parseToC, { TOC_PLUGIN_PATH } from "./plugins/toc.ts";

export const REMARK_PLUGINS = [
  [remarkFrontmatter, "remark-frontmatter"],
  [remarkMdxFrontmatter, "remark-mdx-frontmatter", { name: "metadata" }],
  [parseContentType, CONTENT_TYPE_PLUGIN_PATH],
  [parseMetadata, METADATA_PLUGIN_PATH],
] as const;

export const REHYPE_PLUGINS = [
  [rehypeSlug, "rehype-slug"],
  [
    rehypePrettyCode,
    "rehype-pretty-code",
    {
      keepBackground: false,
      theme: "github-dark",
    },
  ],
  [parseToC, TOC_PLUGIN_PATH],
  [validateFile, VALIDATION_PLUGIN_PATH],
] as const;

export async function processFile(path: string): Promise<CompiledVFile | null> {
  const inFile = new VFile(await readFile(path, { encoding: "utf-8" }));
  inFile.path = path;

  const outFile = await createProcessor({
    remarkPlugins: REMARK_PLUGINS.map(([plugin]) => plugin),
    rehypePlugins: REHYPE_PLUGINS.map(([plugin]) => plugin),
  }).process(inFile);

  return outFile as CompiledVFile;
}
