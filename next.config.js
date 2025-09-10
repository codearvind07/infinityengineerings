/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    largePageDataBytes: 128 * 100000, // 128kb
    // Enable performance optimizations
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  // Bundle optimizations
  modularizeImports: {
    '@radix-ui/react-*': {
      transform: '@radix-ui/react-{{member}}',
    },
  },
  // Enable React strict mode for better performance in development
  reactStrictMode: true,
  // Enable compression
  compress: true,
  // Optimize static assets
  staticPageGenerationTimeout: 10000,
};

module.exports = nextConfig;