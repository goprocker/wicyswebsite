/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopack: {
      root: '.',
    },
  },
};

module.exports = nextConfig;
