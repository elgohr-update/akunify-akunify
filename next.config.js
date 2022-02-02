/** @type {import('next').NextConfig} */
const webpack = require('webpack')
const dotenv = require('dotenv')

const DEFAULT_ENV = 'params/.env'
dotenv.config({ path: DEFAULT_ENV })

const { parsed: localEnv } = dotenv.config({ path: DEFAULT_ENV })

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version: process.env.VERSION,
    configHost: process.env.ENV_NAME,
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}

module.exports = nextConfig
