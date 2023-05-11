const { withContentlayer } = require("next-contentlayer")


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

// module.exports = nextConfig
module.exports = withContentlayer(nextConfig)