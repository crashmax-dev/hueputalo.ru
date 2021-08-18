import { Telegram } from '~/lib/Telegraf'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { InferGetStaticPropsType } from 'next'

export default function StickersPage({ name, stickers }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-800">
      <Head>
        <title>hueputalo stickers</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-8 xl:px-20">
        <h1 className="uppercase text-4xl md:text-6xl my-12 font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 via-yellow-300 to-yellow-600">
          hueputalo stickers
        </h1>

        <div className="grid grid-rows-6 sm:grid-rows-3 grid-flow-col gap-4">
          {stickers.map(({ file_id, emoji }, key) => (
            <Image
              key={key}
              className="p-6 m-3 mt-6 text-left border w-96 rounded-xl bg-gray-700"
              width="128"
              height="128"
              src={`/api/sticker/${file_id}`}
              alt={emoji}
            />
          ))}
        </div>

        <button
          type="button"
          className="p-3 w-40 my-12 font-semibold rounded-xl bg-gray-700 hover:bg-gray-600"
          onClick={() => router.push(`tg://addstickers?set=${name}`)}
        >
          Add Stickers
        </button>
      </main>

      <footer className="flex items-center justify-center w-full h-24 font-semibold">
        <a
          href="https://twitch.tv/ma7emat1k"
          className="flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Author ma7emat1k
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const packName = 'OmegaLUL_CELIK'
  const { name, stickers } = await Telegram.getStickerSet(packName)

  return {
    props: {
      name,
      stickers
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}