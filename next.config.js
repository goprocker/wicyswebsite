const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      root: path.join(__dirname),
    },
  },
};

module.exports = nextConfig;
