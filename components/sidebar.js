import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar(props) {
  return (
    <nav className={styles.nav}>
      <Link href="/education/laws">
        <a className={props.picked === "laws" ? styles.picked : ""}>Законы</a>
      </Link>
      <Link href="/education/laws">
        <a className={props.picked === "0" ? styles.picked : ""}>Temp</a>
      </Link>
      <Link href="/education/laws">
        <a className={props.picked === "1" ? styles.picked : ""}>Temp</a>
      </Link>
      <Link href="/education/laws">
        <a className={props.picked === "2" ? styles.picked : ""}>Temp</a>
      </Link>
    </nav>
  )
}