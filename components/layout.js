import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <html lang="ru" />
        <title>Управление БПЛА</title>
        <meta charSet="utf-8"/>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}