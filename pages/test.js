import Nav from '../components/nav'
import TestItem from '../components/testItem'

export default function Test() {
  return (
    <div>
      <Nav pressed={"test"}/>
      <main className="test">
        <TestItem/>
      </main>
    </div>
  )
}