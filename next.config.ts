import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/myBlog',
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Replace 'myapp' with your actual repository name if it's different
  // basePath: '/myapp',
};

export default nextConfig;
