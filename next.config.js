module.exports = {
  webpack5: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://twitch.tv/quakerlegend',
        permanent: true
      }
    ]
  }
}