import type { Doctype, Node, Root } from "hast";
import type { MdxJsxFlowElementHast } from "mdast-util-mdx-jsx";
import type { MdxjsEsmHast } from "mdast-util-mdxjs-esm";
import { rehypePrettyCode } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import type { VFile } from "vfile";

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
  [rehypePlugin, import.meta.filename],
] as const;

const ROOT_ELEMENTS = ["mdxjsEsm", "doctype"] as const;

function isRootElement(node: Node): node is Doctype | MdxjsEsmHast {
  return ROOT_ELEMENTS.includes(node.type as (typeof ROOT_ELEMENTS)[number]);
}

export default function rehypePlugin() {
  return (tree: Root, file: VFile) => {
    const esm = tree.children.filter(isRootElement);
    const content = tree.children.filter((node) => !isRootElement(node));

    const wrapper: MdxJsxFlowElementHast = {
      type: "mdxJsxFlowElement",
      name: "div",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "path",
          value: JSON.stringify(file.data.path),
        },
      ],
      children: content,
    };

    tree.children = [...esm, wrapper];
  };
}
