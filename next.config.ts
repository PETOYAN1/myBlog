import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/myBlog',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
