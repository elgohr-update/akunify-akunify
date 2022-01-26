/** @type {import('next').NextConfig} */
const dotenv = require('dotenv')

const DEFAULT_ENV = 'params/.env'
dotenv.config({ path: DEFAULT_ENV })

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
