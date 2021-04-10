import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router"

export default function Home() {
  const r = useRouter()

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
          Verifying important information...
        </p>
      </main>
    </div>
  )
}
