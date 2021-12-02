import Nav from '../components/nav'
import Sidebar from '../components/sidebar'

export default function Education() {
  return (
    <div>
      <Nav picked={"education"}/>
      <main className="education">
        <Sidebar/>
        <p className="education">Базовая информация</p>
      </main>
    </div>
  )
}