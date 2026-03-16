/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/myBlog',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
