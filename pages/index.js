import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>hiLitaWorld</title>
        <meta name="description" content="a world of Lita" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mx-auto">
          <div className="text-3xl font-bold underline text-center">
            Hello world!
          </div>
          <p className='text-center'>test</p>
        </div>
        <div className="container mx-auto text-center">
        <Link href="/weather" passHref>
          <a className="text-blue-600 visited:text-purple-600">Weather</a>
        </Link>
          

        </div>
      </main>
    </div>
  )
}
