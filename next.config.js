/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.kabum.com.br",
      },
    ],
  },
};

module.exports = nextConfig;
