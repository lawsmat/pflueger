// TODO: Add Discord Oauth Authorization with the bot.
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'

export default function Home() {
  const r = useRouter()
  const [redirecting, setRedirecting] = useState(false)
  useEffect(() => {
    if(!redirecting) {
        setRedirecting(true)
        fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/authorize")
            .then(d => d.json())
            .then(data => {
                console.log(data)
                r.replace(data.url)
            })
    }
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Authorizing Request
        </h1>

        <p className={styles.description}>
          Contacting the Discord Combobulator...
        </p>
      </main>
    </div>
  )
}
