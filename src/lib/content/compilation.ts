import { readFile } from "node:fs/promises";
import { createProcessor } from "@mdx-js/mdx";
import { VFile } from "vfile";
import type { ContentData } from "./content-types.ts";
import { REHYPE_PLUGINS } from "./plugins/rehype.ts";
import { REMARK_PLUGINS } from "./plugins/remark.ts";

export async function processFile(
  path: string,
): Promise<(VFile & { data: ContentData }) | null> {
  const inFile = new VFile(await readFile(path, { encoding: "utf-8" }));
  inFile.path = path;

  const outFile = await createProcessor({
    remarkPlugins: REMARK_PLUGINS.map(([plugin]) => plugin),
    rehypePlugins: REHYPE_PLUGINS.map(([plugin]) => plugin),
  }).process(inFile);

  return outFile as VFile & { data: ContentData };
}
