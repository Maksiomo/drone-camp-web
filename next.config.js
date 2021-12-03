module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/registration',
        permanent: true,
      },
    ]
  },
}
