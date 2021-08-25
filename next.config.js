module.exports = {
  webpack5: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://twitch.tv/quakerlegend',
        permanent: true
      },
      {
        source: '/stickers',
        destination: 'https://telegram-stickers.vercel.app/OmegaLUL_CELIK',
        permanent: true
      }
    ]
  }
}