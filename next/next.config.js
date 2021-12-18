module.exports = {
  images: {
    domains: ['localhost', 'i.ibb.co', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/uploads/:path`, // Proxy to Backend
      },
    ];
  },
};
