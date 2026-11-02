import createMDX from "@next/mdx";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import { REHYPE_PLUGINS } from "./src/lib/content/plugins/rehype.ts";
import { REMARK_PLUGINS } from "./src/lib/content/plugins/remark.ts";

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
    remarkPlugins: REMARK_PLUGINS.map(([_, ...plugin]) => plugin),
    rehypePlugins: REHYPE_PLUGINS.map(([_, ...plugin]) => plugin),
  },
});

const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: {
    mode: "auto",
  },
});

export default withVanillaExtract(withMDX(nextConfig));
