import Banner from '@/components/Banner'
import Header from '@/components/Header'
import ProductFeed from '@/components/ProductFeed'
import Head from 'next/head'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon C</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        <Banner />

        <ProductFeed products={products} />
        
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
  .then(
    (res) => res.json()
  )
  return { 
    props: {
      products,
    },
  }
}