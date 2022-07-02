/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "tailwindui.com"],
  },
  experimental: {
    nextScriptWorkers: true,
    images: {
      unoptimized: Boolean(process.env.LOCAL) ? false : true,
    },
  },
};

module.exports = nextConfig;
