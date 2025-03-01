/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cms.webalora.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cms.webalora.com',
        port: '',
        pathname: '/**', // Changed from '/uploads/**' to allow all paths
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
      // Add localhost for development if needed
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/blogs',
        destination: 'https://cms.webalora.com/api/blogs',
      },
      {
        source: '/api/case-studies',
        destination: 'https://cms.webalora.com/api/case-studies',
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig