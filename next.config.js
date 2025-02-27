/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'webaloracms-production-9e8b.up.railway.app',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'webaloracms-production-9e8b.up.railway.app',
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
        destination: 'http://webaloracms-production-9e8b.up.railway.app/api/blogs',
      },
      {
        source: '/api/case-studies',
        destination: 'http://webaloracms-production-9e8b.up.railway.app/api/case-studies',
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