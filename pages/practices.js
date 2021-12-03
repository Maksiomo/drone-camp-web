import Nav from '../components/nav'

export default function Practices() {
  return (
    <div>
      <Nav pressed={"practices"}/>
      <main className="practices">
        <iframe className="simulator" src="https://playcanv.as/b/azhwFd8w"></iframe>
      </main>
    </div>
  )
}