import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Freshie</title>
        <meta name="description" content="A project for NUS Orbital" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-extrabold text-7xl">
          Welcome to Freshie!
        </h1>

        <p className="font-light text-2xl mt-3">
          A project made for NUS Orbital 2021.
        </p>

        <div className={styles.grid}>
          <Link href="/demo">
            <a className={styles.card}>
              <h2 className="font-bold">Try It Out! &rarr;</h2>
              <p>Let us know your thoughts!</p>
            </a>
          </Link>

          <Link href="https://freshieorbital.gitbook.io/team-fitbob/">
            <a className={styles.card}>
              <h2 className="font-bold">Our Docs &rarr;</h2>
              <p>Challenges we faced.</p>
            </a>
          </Link>

          <Link href="https://github.com/jamesyeap/freshie">
            <a
              className={styles.card}
            >
              <h2 className="font-bold">Our Code &rarr;</h2>
              <p>Access our GitHub repo here!</p>
            </a>
          </Link>

          <Link href="/demo">
            <a
              className={styles.card}
            >
              <h2 className="font-bold">Team FitBob &rarr;</h2>
              <p>
                About Us.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
