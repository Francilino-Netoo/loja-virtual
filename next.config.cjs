/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Loja-Virtual",
  assetPrefix: "/Loja-Virtual/",
};

module.exports = nextConfig;
