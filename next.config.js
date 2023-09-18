const createMDX = require("@next/mdx");
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX(nextConfig);
