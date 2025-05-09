// next.config.ts ou next.config.js pour newt 15X
/** @type {import('next').NextConfig} */
const nextConfig = {
 
  devIndicators: {
    position: 'bottom-right',
  },
  // Cette configuration permet d'exposer ton serveur sur le réseau
  // Ce n'est pas exactement la même chose mais peut résoudre ton problème
  async rewrites() {
    return {
      beforeFiles: [
        // Ces règles permettront d'accéder depuis d'autres origines
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