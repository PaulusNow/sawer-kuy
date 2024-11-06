/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
    async rewrites() {
      return [
        {
          source: '/socket.io',
          destination: '/api/socket',
        },
      ];
    },
  };
  