/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/loja-virtual",
  assetPrefix: "/loja-virtual/",
};

module.exports = nextConfig;
