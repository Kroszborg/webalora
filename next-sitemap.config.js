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
    '/offline',
    '/api/*',
    '/admin/*',
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
          '/offline',
          '/admin/*',
        ],
      },
    ],
  },
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  // Custom transform function for URL configuration
  transform: async (config, path) => {
    // Custom priority for different types of pages
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } 
    // Main service pages
    else if (/^\/(services|cybersecurity-solutions|cloud-solutions|networking|backup|consultancy|voip-solutions|cctv-solutions)$/.test(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Main sections
    else if (/^\/(blog|case-studies|resource|about|contact|careers|faq)$/.test(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Legal pages
    else if (/^\/(privacy-policy|terms|cookie-policy|modern-slavery-statement)$/.test(path)) {
      priority = 0.3;
      changefreq = 'monthly';
    }
    // Blog posts, case studies, resources
    else if (/^\/(blog|case-studies|resource)\/[^\/]+$/.test(path)) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
  additionalPaths: async () => {
    // Add any paths that might be missing from automatic discovery
    return [
      { loc: '/sitemap', changefreq: 'weekly', priority: 0.5 },
    ];
  },
};