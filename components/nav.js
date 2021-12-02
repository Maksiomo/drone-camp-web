import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>О нас</a>
      </Link>
      <Link href="/education">
        <a>База знаний</a>
      </Link>
      <Link href="/practices">
        <a>Практика</a>
      </Link>
      <Link href="/test">
        <a>Тест</a>
      </Link>
    </nav>
  )
}