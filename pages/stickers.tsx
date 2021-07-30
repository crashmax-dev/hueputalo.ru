import Telegraf from '~/lib/Telegraf'
import Head from 'next/head'
import Image from 'next/image'
import { InferGetStaticPropsType } from 'next'

export default function StickersPage({ packName, stickers }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-800">
      <Head>
        <title>hueputalo stickers</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <h1 className="uppercase text-6xl my-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 via-yellow-300 to-yellow-600">
          hueputalo stickers
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {stickers.map((slug, idx) => (
            <Image
              key={idx}
              className="p-6 m-3 mt-6 text-left border w-96 rounded-xl bg-gray-700"
              width="128"
              height="128"
              src={`/api/sticker/${slug}`}
              alt="sticker"
            />
          ))}
        </div>

        <button
          type="button"
          className="p-3 w-40 my-12 font-semibold rounded-xl bg-gray-700 hover:bg-gray-600"
          onClick={() => location.href = `tg://addstickers?set=${packName}`}
        >
          Add Stickers
        </button>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 font-semibold">
        <a
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author ???
        </a>
      </footer> */}
    </div>
  )
}

export async function getStaticProps() {
  const packName = 'OmegaLUL_CELIK'
  const stickersSet = await Telegraf.telegram.getStickerSet(packName)
  const stickers = await Promise.all(
    stickersSet.stickers.map(async ({ file_id }) => {
      return (await Telegraf.telegram.getFile(file_id)).file_id
    })
  )

  return {
    props: {
      packName,
      stickers
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}