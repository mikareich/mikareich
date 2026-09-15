import rehypeToc from "@jsdevtools/rehype-toc";
import type { Element, Root } from "hast";
import { toEstree } from "hast-util-to-estree";
import type { MdxJsxFlowElementHast } from "mdast-util-mdx-jsx";
import { type Plugin, unified } from "unified";
import { visit } from "unist-util-visit";

// Run after rehype-slug: the generated links use the actual heading IDs.
const rehypePostToc: Plugin<[], Root> = () => (tree, file) => {
  visit(tree, "mdxJsxFlowElement", (node: MdxJsxFlowElementHast) => {
    if (node.name !== "PostBody") return;
    if (
      node.attributes.some(
        (attribute) =>
          attribute.type === "mdxJsxAttribute" && attribute.name === "toc",
      )
    ) {
      file.fail(
        "PostBody's toc prop is supplied by the MDX compiler; omit it in the source",
        node,
      );
    }

    const body: Root = { type: "root", children: node.children };
    unified()
      .use(rehypeToc, {
        nav: false,
        headings: ["h2", "h3", "h4", "h5", "h6"],
        cssClasses: {
          toc: "",
          list: "list-ordered space-y-4 [&_ol]:mt-4 [&_ol]:ml-4",
          listItem: "list-item",
          link: "highlighted",
        },
        customizeTOC(toc) {
          node.attributes.push({
            type: "mdxJsxAttribute",
            name: "toc",
            value: {
              type: "mdxJsxAttributeValueExpression",
              value: "",
              // The package uses older HAST typings; its output is an <ol> tree.
              data: { estree: toEstree(toc as Element) },
            },
          });
          // PostBody places the list, rather than inserting it into the prose.
          return false;
        },
      })
      .runSync(body);
  });
};

export default rehypePostToc;
