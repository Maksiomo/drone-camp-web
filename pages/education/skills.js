import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Skills() {
  return (
    <div>
      <Nav pressed={"education"} />
      <main className="education">
        <Sidebar pressed={"skills"}/>
        <div className="education-text">
          <h2>Умения</h2>
        </div>
      </main>
    </div>
  )
}