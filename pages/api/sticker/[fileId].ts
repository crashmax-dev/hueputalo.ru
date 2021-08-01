import { Telegram } from '~/lib/Telegraf'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query.fileId as string
    const { href } = await Telegram.getFileLink(query)
    const data = await fetch(href)

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
    res.setHeader('Content-Type', 'image/webp')
    res.send(data.body)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default handler