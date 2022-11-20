/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/subscribe/thankyou'],
  additionalPaths: async (config) => [
    await config.transform(config, '/subscribe/1/netflix-premium'),
    await config.transform(config, '/subscribe/2/spotify-premium-family'),
    await config.transform(config, '/subscribe/3/youtube-premium-family'),
    await config.transform(config, '/subscribe/4/disney-hotstar'),
  ],
}
