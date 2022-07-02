/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: Boolean(process.env.LOCAL) ? false : true,
    },
  },
};

module.exports = nextConfig;
