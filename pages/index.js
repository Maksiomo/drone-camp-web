import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Nav picked={"about"}/>
      <main className="about">
        Тест
      </main>
    </div>
  )
}
