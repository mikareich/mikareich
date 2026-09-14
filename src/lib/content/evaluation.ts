import { readFile } from "node:fs/promises";
import { type EvaluateOptions, evaluate } from "@mdx-js/mdx";
import type { MDXContent } from "mdx/types";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import type { output } from "zod";
import { CONTENT_TYPE_SCHEMAS, type ContentType } from "./content-types";

const EVALUATE_OPTIONS = {
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  Fragment,
  jsx,
  jsxs,
} satisfies EvaluateOptions;

type ContentEvaluation<Type extends ContentType> = {
  Component: MDXContent;
  config: output<(typeof CONTENT_TYPE_SCHEMAS)[Type]>;
};

/** Validates and evaluates an MDX file relative to the consumer's module URL. */
export async function evaluateFile<Type extends ContentType>(
  type: Type,
  relativePath: string,
  consumerUrl: string,
): Promise<ContentEvaluation<Type>> {
  const fileUrl = new URL(relativePath, consumerUrl);
  const source = await readFile(fileUrl, "utf8");

  const { default: Component, frontmatter } = await evaluate(source, {
    ...EVALUATE_OPTIONS,
    baseUrl: fileUrl.href,
  });

  // validate config
  const schema = CONTENT_TYPE_SCHEMAS[type];

  if (!schema) throw new Error(`Invalid content type supplied: ${type}.`);
  const config = schema.parse(frontmatter);

  return { Component, config } as ContentEvaluation<Type>;
}
