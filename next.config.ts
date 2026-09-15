import { resolve } from "node:path";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["dev-box"],
  outputFileTracingIncludes: {
    "/blog": ["./src/app/blog/\\(posts\\)/**/page.mdx"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  typedRoutes: true,
  experimental: {
    useTypeScriptCli: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: [
      "rehype-slug",
      resolve("src/lib/mdx/rehype-post-toc.mts"),
      ["rehype-pretty-code", { keepBackground: false, theme: "github-dark" }],
    ],
  },
});

export default withMDX(nextConfig);
