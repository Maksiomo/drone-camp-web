import Nav from '../components/nav'
import UserLk from '../components/userlk'
import Course from '../components/course'

export default function Education() {
  return (
    <div>
      <Nav pressed={"cabinet"}/>
      <main className="cabinet">
        
        <Course />
        <UserLk />
      </main>
    </div>
  )
}