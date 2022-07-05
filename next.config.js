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
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      stream: false,
      constants: false,
    };
    return config;
  },
};

module.exports = nextConfig;
