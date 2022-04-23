/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  // swcMinify: true,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
}

module.exports = withPlugins(
  [
    [
      withPWA({
        pwa: {
          runtimeCaching,
          dest: 'public',
        },
      }),
    ],
  ],
  nextConfig
)
