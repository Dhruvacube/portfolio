/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
    unoptimized: Boolean(Number(process.env.LOCAL)) ? false : true,
  },
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
    amp: {
      skipValidation: true,
    },
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, path: false, stream: false, constants: false };
  //   return config;

  // }
};

module.exports = nextConfig;
