import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Skills() {
  return (
    <div>
      <Nav picked={"education"} />
      <main className="education">
        <Sidebar picked={"skills"}/>
        <div className="education-text">
          <p><h2>Умения</h2></p>
        </div>
      </main>
    </div>
  )
}