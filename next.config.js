const { withSentryConfig } = require('@sentry/nextjs');
// https://docs.sentry.io/platforms/javascript/guides/nextjs/


const SentryWebpackPluginOptions = {
  silent: true,
};

const basePath = '/ngv-portal'

const day = 60 * 60 * 24;
const imgCacheTTL = 30 * day;

const nextConfig = {
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  webpack5: true,
  images: {
    path: `${basePath}/_next/image/`,
    minimumCacheTTL: imgCacheTTL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: false,
  experimental: {
    staticPageGenerationTimeout: 120,
  },
  async redirects() {
    return [
      {
        source: '/experimental-data',
        destination: '/experimental-data/layer-anatomy',
        permanent: false,
      },
      {
        source: '/reconstruction-data',
        destination: '/reconstruction-data/brain-regions',
        permanent: false,
      },
      {
        source: '/digital-reconstructions',
        destination: '/digital-reconstructions/brain-regions',
        permanent: false,
      },
      {
        source: '/validations',
        destination: '/validations/brain-regions',
        permanent: false,
      },
      {
        source: '/predictions',
        destination: '/predictions/brain-regions',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [{
      source: '/(.*).(jpg|jpeg|png|webp)',
      headers: [{
        key: 'Cache-Control',
        value: `public, max-age=${imgCacheTTL}, s-maxage=${imgCacheTTL}, stale-while-revalidate=${imgCacheTTL}`,
      }],
    },];
  },
};

module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions);
