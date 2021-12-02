import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={props.picked === "about" ? styles.picked : ""}>О нас</a>
      </Link>
      <Link href="/education">
        <a className={props.picked === "education" ? styles.picked : ""}>База знаний</a>
      </Link>
      <Link href="/practices">
        <a className={props.picked === "practices" ? styles.picked : ""}>Практика</a>
      </Link>
      <Link href="/test">
        <a className={props.picked === "test" ? styles.picked : ""}>Тест</a>
      </Link>
    </nav>
  )
}