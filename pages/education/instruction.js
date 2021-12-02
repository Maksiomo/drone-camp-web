import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Instruction() {
  return (
    <div>
      <Nav picked={"education"} />
      <main className="education">
        <Sidebar picked={"instruction"}/>
        <div className="education-text">
          <p><h2>Инструкция</h2></p>
        </div>
      </main>
    </div>
  )
}