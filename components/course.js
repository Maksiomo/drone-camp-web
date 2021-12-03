import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Course(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/cabinet/#">
        <a className={props.pressed === "laws" ? styles.pressed : ""}>Структура курса</a>
      </Link>
      <Link href="/cabinet/#">
        <a className={props.pressed === "profession" ? styles.pressed : ""}>К последней практике</a>
      </Link>
      <Link href="/cabinet/#">
        <a className={props.pressed === "skills" ? styles.pressed : ""}>Экзамен</a>
      </Link>
      <Link href="/cabinet/#">
        <a className={props.pressed === "instruction" ? styles.pressed : ""}>Помощь</a>
      </Link>
    </nav>
  )
}