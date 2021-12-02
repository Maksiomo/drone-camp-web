import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Profession() {
  return (
    <div>
      <Nav picked={"education"} />
      <main className="education">
        <Sidebar picked={"profession"}/>
        <div className="education-text">
          <p><h2>О профессии</h2></p>
        </div>
      </main>
    </div>
  )
}