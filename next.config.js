module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path',
        destination: '/',
        permanent: false,
      },
    ]
  }
}
 