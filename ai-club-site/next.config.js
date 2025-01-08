/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ksuaiclub.com',
          },
        ],
        destination: 'https://www.ksuaiclub.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
