import matter from "gray-matter";
import type { Root } from "mdast";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import type { VFile } from "vfile";
import {
  CONTENT_DATA,
  CONTENT_TYPE,
  type ContentType,
} from "../content-types.ts";
import { POSTS_FOLDER } from "../paths.ts";
import { generateToC, type ToC } from "../toc.ts";

export const REMARK_PLUGINS = [
  [remarkFrontmatter, "remark-frontmatter"],
  [remarkMdxFrontmatter, "remark-mdx-frontmatter", { name: "metadata" }],
  [remarkPlugin, import.meta.filename],
] as const;

export default function remarkPlugin() {
  return (tree: Root, file: VFile) => {
    const type: ContentType = file.path.startsWith(POSTS_FOLDER)
      ? CONTENT_TYPE.POST
      : CONTENT_TYPE.PAGE;

    const source = Buffer.from(file.value).toLocaleString();
    const metadata = matter(source).data;

    let toc: ToC | null = null;
    if (type === CONTENT_TYPE.POST) {
      toc = generateToC(tree);
    }

    file.data = CONTENT_DATA.parse({ type, metadata, toc, path: file.path });
    console.log(file.data);
  };
}
