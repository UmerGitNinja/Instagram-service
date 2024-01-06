/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            pathname: '/image/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent-lga3-2.cdninstagram.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'scontent-lga3-1.cdninstagram.com',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig