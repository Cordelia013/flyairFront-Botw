// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active React Strict Mode
  reactStrictMode: true,
  devIndicators: {
    position: 'bottom-right',
  },
  
  //   // Ajout de la configuration allowedDevOrigins
  //   allowedDevOrigins: [
  //     'http://10.0.8.10',
  //     'https://10.0.8.10',
  // ],

  
  // Tes autres configurations existantes
  devIndicators: {
    position: 'bottom-right',
  },

  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/:path*',
  //         has: [
  //           {
  //             type: 'header',
  //             key: 'host',
  //             value: '10.0.7.10',
  //           },
  //         ],
  //         destination: '/:path*',
  //       },
  //     ],
  //   };
  // },
};

module.exports = nextConfig;