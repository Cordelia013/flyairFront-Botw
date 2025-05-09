// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active React Strict Mode
  reactStrictMode: true,
  
  // Tes autres configurations existantes
  devIndicators: {
    position: 'bottom-right',
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'header',
              key: 'host',
              value: '10.0.7.10',
            },
          ],
          destination: '/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;