import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Laws() {
  return (
    <div>
      <Nav picked={"education"}/>
      <main className="education">
        <Sidebar/>
        <h2>Введение</h2>
      </main>
    </div>
  )
}
