import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pflueger App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/lawsmat/pfluger">Pflueger</a>!
        </h1>

        <p className={styles.description}>
          Welcome to your Pflueger App! Modify the 
          <code className={styles.code}>web/pages/index.js</code>
           file to edit this landing page.
        </p>
      </main>
    </div>
  )
}
