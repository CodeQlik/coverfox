module.exports = {
  siteUrl: 'https://coverfox.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      'https://coverfox.vercel.app/sitemap.xml',
    ],
  },
}; 