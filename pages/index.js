import Nav from '../components/nav'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Home() {
  return (
    <div>
      <Nav picked={"about"}/>
      <main className="about">
        <div className="about-text">
          Проект обучения управлению БПЛА от команды JABCA.
        </div>
        <div className="about-image">
          <Image alt="JABCA logo" src={logo} width={250} height={250}/>
        </div>
      </main>
    </div>
  )
}
