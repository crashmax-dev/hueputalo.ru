import Head from 'next/head'
import Image from 'next/image'
import styled from '@emotion/styled'

export default function BishepPage() {
  return (
    <Layout className="flex flex-col items-center min-h-screen text-white">
      <Head>
        <title>Хуепутало.РУ - бенгальский котенок Бишеп</title>
        <meta name="keywords" content="хеупутало, hueputalo, кот, котенок, бенгальский кот, леопардовый окрас, Бишеп, Bishep" />
        <meta name="description" content="Хуепутало Бишеп - это котенок бенгальской породы классического леопардового окраса" />
      </Head>

      <main className="px-8 pt-16">
        <div>
          <Image
            src="/assets/header.png"
            width={1050}
            height={170}
            quality={100}
            alt="header"
          />
        </div>

        <Text fontSize={19} className="max-w-4xl mt-6 leading-6">
          <p className="my-4"><b>&quot;Хуепутало&quot;</b>  - это любимое прозвище бенгальского котенка по имени Бишеп.</p>
          <p>Кот Бишеп родился 5 декабря 2011 года в городе Владимире. Его родителей зовут Оникс и Шарма.</p>
          <p>Сейчас Хуепутало Бишеп живет в Москве в семье Васи и Кати Савкиных, и очень этому рад.</p>
          <p>Бенгальский котенок Хуепутало Бишеп имеет классический леопардовый окрас и он очень милый...</p>
          <p>Единственный минус Хуепутала Бишепа - это запах когда он срёт! А потом этот обосрыш бегает с грязными в говне ногами по чистой кровати и воняет...</p>
        </Text>

        <div className="grid grid-cols-2 my-12 gap-6">
          <Image
            src="/assets/bishep_1.png"
            width={441}
            height={359}
            quality={100}
            alt="Хуепутало Бишеп в ахуе"
          />
          <Image
            src="/assets/bishep_2.png"
            width={441}
            height={359}
            quality={100}
            alt="Бишеп Тупит"
          />
          <Image
            src="/assets/bishep_3.png"
            width={441}
            height={359}
            quality={100}
            alt="Хуепутало потягивается"
          />
          <Image
            src="/assets/bishep_4.png"
            width={441}
            height={359}
            quality={100}
            alt="Хуепутало пернул и смотрит"
          />
        </div>
      </main>

      <Footer className="w-full p-4">
        <Text fontSize={11}>
          <p>2011-{new Date().getFullYear()} @ &quot;Хуепутало.РУ&quot; - Персональный сайт котенка Бишепа.</p>
          <p>Все права защищены и охраняются Законом.</p>
        </Text>
      </Footer>
    </Layout>
  )
}

const Layout = styled.div`
  background-image: url('/assets/background.png');
`

const Text = styled.div<{ fontSize: number }>`
  font-size: ${(p => p.fontSize)}px;
  font-family: Arial;
`

const Footer = styled.footer`
  background-color: #262626;
`