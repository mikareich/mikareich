import type { Node } from "hast";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";
import { array, literal, number, object, type output, string } from "zod";
import { Validator } from "../validator.ts";
import { CONTENT_TYPE } from "./content-types.ts";
import { contentTypePredicate, pathPredicate } from "./predicates.ts";

const TAG_NAME_SCHEMA = literal(["h1", "h2", "h3", "h4", "h5", "h6"] as const);

const TOC_ENTRY_SCHEMA = object({
  depth: number().min(0).max(5),
  value: string(),
  id: string(),
});

export const TOC_SCHEMA = array(TOC_ENTRY_SCHEMA);

type TagName = output<typeof TAG_NAME_SCHEMA>;

export type ToC = output<typeof TOC_SCHEMA>;

type HeadingNode = {
  type: "element";
  tagName: TagName;
  properties?: { id?: string };
  children: Node[];
};

type TextNode = { type: "text"; value: string };

function isHeadingNode(node: Node): node is HeadingNode {
  return (
    node.type === "element" &&
    "tagName" in node &&
    TAG_NAME_SCHEMA.safeParse(node.tagName).success
  );
}

function isTextNode(node: Node): node is TextNode {
  return node.type === "text";
}

const validator = new Validator().has(pathPredicate).has(contentTypePredicate);

/** Rehype plugin that generates a ToC of the AST. */
export default function parseToC() {
  return (tree: Node, file: VFile) => {
    if (!validator.verify(file)) throw new Error();
    if (file.data.type !== CONTENT_TYPE.POST) return;

    const toc: ToC = [];

    visit(tree, isHeadingNode, (node) => {
      const depth = Number(node.tagName.at(1)) - 1;
      const id = node.properties?.id;
      if (!id) return;

      let value = "";
      visit(node, isTextNode, (node) => {
        value += node.value;
      });

      toc.push({ depth, id, value });
    });

    file.data.toc = toc;
  };
}

export const TOC_PLUGIN_PATH = import.meta.filename;
