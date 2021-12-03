import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Instruction() {
  return (
    <div>
      <Nav pressed={"education"} />
      <main className="education">
        <Sidebar pressed={"instruction"}/>
        <div className="education-text">
          <h2>Инструкция</h2>
        </div>
      </main>
    </div>
  )
}