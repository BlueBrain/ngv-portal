const withBundleAnalyzer = require('@next/bundle-analyzer') ({
  enabled: process.env.ANALYZE === 'true',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig = {
  basePath,
  assetPrefix: `${basePath}/`,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: false,
  output: 'standalone',
  experimental: {
    esmExternals: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
