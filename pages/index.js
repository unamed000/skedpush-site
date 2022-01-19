import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Let's vote for our most beautiful cat. <a href="skedcodepush://extension/CatTinder">Please follow this link!</a> <br/>
        </p>
       <p className="description">
          Or compete in 2048 event. <a href="skedcodepush://extension/ReactNative2048?requireScore=50">Please follow this link!</a> <br/>
        </p>
      </main>

      <Footer />
    </div>
  )
}
