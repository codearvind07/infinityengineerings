/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    largePageDataBytes: 128 * 100000, // 128kb
  },
};

module.exports = nextConfig;
