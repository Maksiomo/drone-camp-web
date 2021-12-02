import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/education/laws">
        <a className={props.picked === "laws" ? styles.picked : ""}>Законы</a>
      </Link>
      <Link href="/education/profession">
        <a className={props.picked === "profession" ? styles.picked : ""}>О профессии</a>
      </Link>
      <Link href="/education/skills">
        <a className={props.picked === "skills" ? styles.picked : ""}>Требуемые умения</a>
      </Link>
      <Link href="/education/instruction">
        <a className={props.picked === "instruction" ? styles.picked : ""}>Инструкция</a>
      </Link>
    </nav>
  )
}