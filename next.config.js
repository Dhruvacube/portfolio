/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
  experimental: {
    nextScriptWorkers: true,
    images: {
      unoptimized: Boolean(Number(process.env.LOCAL)) ? false : true,
    },
  },
};

module.exports = nextConfig;
