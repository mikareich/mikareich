import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import {
  REHYPE_PLUGINS,
  REMARK_PLUGINS,
} from "./src/lib/content/compilation.ts";

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

export default withMDX(nextConfig);
