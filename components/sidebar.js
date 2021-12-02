import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/education/laws">
        <a>Законы</a>
      </Link>
    </nav>
  )
}