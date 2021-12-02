import Nav from '../../components/nav'
import Sidebar from '../../components/sidebar'

export default function Instruction() {
  return (
    <div>
      <Nav pressed={"education"} />
      <main className="education">
        <Sidebar pressed={"instruction"}/>
        <div className="education-text">
          <p><h2>Инструкция</h2></p>
        </div>
      </main>
    </div>
  )
}