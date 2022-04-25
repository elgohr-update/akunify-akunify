/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  // swcMinify: true,
  // productionBrowserSourceMaps: true,
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    formats: ['image/avif', 'image/webp'],
    domains: [`${process.env.NEXT_PUBLIC_IMAGE_HOST}`],
  },
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
