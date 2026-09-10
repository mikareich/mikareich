import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["dev-box"],
  experimental: {
    rootParams: true,
  },
};

export default nextConfig;
