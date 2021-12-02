import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Laws() {
  return (
    <div>
      <Nav picked={"education"}/>
      <main className="education">
        <Sidebar picked={"laws"}/>
        <div>
          <h2>Введение</h2>
          <p>gjkr<br/>gsjbkd</p>
        </div>
      </main>
    </div>
  )
}
