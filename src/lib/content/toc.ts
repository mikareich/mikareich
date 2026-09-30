import { slug } from "github-slugger";
import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import type { ToC } from "./content-types";

export function generateToC(tree: Root) {
  const toc: ToC = [];

  visit(tree, "heading", (node) => {
    const depth = node.depth;

    let value = "";
    visit(node, "text", (node) => {
      value += node.value;
    });

    const id = slug(value);
    toc.push({ depth, id, value });
  });

  return toc;
}
