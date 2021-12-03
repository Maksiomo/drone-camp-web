import Link from 'next/link'
import styles from './nav.module.css'

export default function Nav(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/education">
        <a className={props.pressed === "education" ? styles.pressed : ""}>База знаний</a>
      </Link>
      <Link href="/practices">
        <a className={props.pressed === "practices" ? styles.pressed : ""}>Практика</a>
      </Link>
      <Link href="/test">
        <a className={props.pressed === "test" ? styles.pressed : ""}>Тест</a>
      </Link>
      <Link href="/about">
        <a className={props.pressed === "about" ? styles.pressed : ""}>О нас</a>
      </Link>
    </nav>
  )
}