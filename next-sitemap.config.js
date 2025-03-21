// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://webalora.com',
  generateRobotsTxt: true,
  exclude: [
    '/cookie-policy',
    '/terms',
    '/modern-slavery-statement',
    '/privacy-policy',
    '/server-sitemap.xml',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://webalora.com/server-sitemap.xml', // For dynamic routes
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/_next/*',
          '/cookie-policy',
          '/terms',
          '/modern-slavery-statement',
          '/privacy-policy',
        ],
      },
    ],
  },
  sitemapSize: 7000,
};