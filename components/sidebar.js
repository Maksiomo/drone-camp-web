import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/education/laws">
        <a className={props.pressed === "laws" ? styles.pressed : ""}>Законы</a>
      </Link>
      <Link href="/education/profession">
        <a className={props.pressed === "profession" ? styles.pressed : ""}>О профессии</a>
      </Link>
      <Link href="/education/skills">
        <a className={props.pressed === "skills" ? styles.pressed : ""}>Требуемые умения</a>
      </Link>
      <Link href="/education/instruction">
        <a className={props.pressed === "instruction" ? styles.pressed : ""}>Инструкция</a>
      </Link>
    </nav>
  )
}