import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@/components/Card';

export default function Home() {

  const [artigos, setArtigos] = useState();

  useEffect(() => {
    axios.get("http://localhost:1337/api/artigos")
      .then((res) => setArtigos(res.data.data))
      .catch((error) => console.log(error))
  }, [])

 if (artigos) return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        
        <Card titulo={artigos.attributes.conteudo} />
      </main>
    </>
  )
}
