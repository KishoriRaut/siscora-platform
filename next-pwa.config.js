/** @type {import('next-pwa').PWAConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // Disable PWA in development mode
  // To test PWA in development, set `disable: false` and run `npm run build` followed by `npm start`
  // Then access the app at http://localhost:3000
  buildExcludes: [
    /middleware-manifest\.json$/, // Exclude middleware manifest
    /_middleware\.js$/, // Exclude middleware
    /middleware\.js$/, // Exclude middleware
    /middleware\/.*\.js$/, // Exclude middleware
    /_middleware\/.*\.js$/, // Exclude middleware
    /middleware-runtime\.js$/, // Exclude middleware runtime
    /server\/.*\.js$/, // Exclude server files
    /server\/.*\.mjs$/, // Exclude server files
    /server\/middleware\..*\.js$/, // Exclude server middleware
  ],
  // Define runtime caching for routes
  runtimeCaching: [
    {
      urlPattern: /^https?:\/\/fonts\.googleapis\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        },
        cacheableResponse: {
          statuses: [0, 200], // Cache successful and opaque responses
        },
      },
    },
    {
      urlPattern: /^https?:\/\/fonts\.gstatic\.com/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts-webfonts',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
        },
        cacheableResponse: {
          statuses: [0, 200], // Cache successful and opaque responses
        },
      },
    },
    {
      urlPattern: /\/_next\/image\?url=.+\/public\/.+\.(?:png|jpg|jpeg|webp|svg|gif)/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'next-image',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
    {
      urlPattern: /\/_next\/static\/(?:[^/]+\/)?[^/]+\.(js|css)/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'next-static-assets',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
    {
      urlPattern: /\/api\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 16,
          maxAgeSeconds: 60 * 5, // 5 minutes
        },
        networkTimeoutSeconds: 10, // fall back to cache if API doesn't respond within 10 seconds
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
  // Configure additional PWA features
  publicExcludes: [
    '!robots.txt',
    '!sitemap.xml',
    '!sitemap-*.xml',
    '!sitemap/**/*',
  ],
  // Configure the workbox options
  buildExcludes: [
    /middleware-manifest\.json$/,
    /_middleware\.js$/,
    /middleware\.js$/,
    /middleware\/.*\.js$/,
    /_middleware\/.*\.js$/,
    /middleware-runtime\.js$/,
    /server\/.*\.js$/,
    /server\/.*\.mjs$/,
    /server\/middleware\..*\.js$/,
  ],
  // Configure the scope and start URL
  scope: '/',
  sw: 'sw.js',
  // Enable source maps in development
  disableDevLogs: false,
  // Configure the precache manifest
  dynamicStartUrl: true,
  // Configure the skip waiting
  skipWaiting: true,
  // Configure the clients claim
  clientsClaim: true,
  // Configure the cleanup outdated caches
  cleanupOutdatedCaches: true,
  // Configure the maximum file size to cache
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10MB
  // Configure the precache manifest
  fallbacks: {
    // Fallback for routes that don't match any route in the app
    document: '/_offline',
    // Fallback for images
    image: '/images/fallback.png',
    // Fallback for fonts
    font: '/fonts/fallback.woff2',
  },
});

module.exports = withPWA({
  // Next.js config
  reactStrictMode: true,
  // Enable production optimizations
  productionBrowserSourceMaps: false,
  // Configure images
  images: {
    domains: ['localhost'], // Add your image domains here
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configure webpack
  webpack: (config, { dev, isServer }) => {
    // Add custom webpack config here
    if (!isServer) {
      // Exclude node modules from client-side bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    return config;
  },
});
