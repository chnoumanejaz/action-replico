/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.kym-cdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
