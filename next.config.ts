import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/new-student-anchor-115" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/new-student-anchor-115/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
