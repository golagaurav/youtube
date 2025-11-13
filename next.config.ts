/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',         // allow any port
        pathname: '/**',  // allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
