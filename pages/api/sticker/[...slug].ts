import Telegraf from '~/lib/Telegraf'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { href } = await Telegraf.telegram.getFileLink(req.query.slug[0])
    const file = await fetch(href)

    res.setHeader('Content-Type', 'image/webp')
    res.send(file.body)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default handler