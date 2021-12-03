import user from '../public/user.png'
import Image from 'next/image'
import styles from './userlk.module.css'
import { useState } from 'react'
import logopic from '../public/logo.png'

export default function UserLk () {
    const [logo, setLogo] = useState("")
    const [testStats, setTestStats] = useState("")
    function showTestStats(){
        if(logo === "") {
        setLogo(<Image alt="JABCA logo" src={logopic} width={250} height={250}/>)
        setRaiting("")
        setPractiseStats("")
        } 
        else {
            setLogo("")
        }
    }
    const [practiseStats, setPractiseStats] = useState("")
    function showPractiseStats(){
        if (practiseStats === "") {
            setPractiseStats("Пройдено 14 практик из 18")
            setLogo("")
            setRaiting("")
            setTestStats("")
        }
        else setPractiseStats("")
    }
    const [raiting, setRaiting] = useState("")
    function showRaiting(){
        if (raiting === "") {
            setRaiting("45 место из 350 студентов")
            setLogo("")
            setTestStats("")
            setPractiseStats("")
        }
        else setRaiting("")
    }
    return (
        <div className={styles.userlk}>
            <div className="info">
                <Image alt="profile pic" src={user} width={100} height={100}/>
                <h5 className='info'>Иван Иванов</h5>
            </div>
            <p>Дата рождения: 16.06.1999</p>
            <p>Почта: user_mail@email.com</p>
            <p>Обучение на: пилот квадрокоптера</p>
            <hr></hr>
            <p>Пройдено заданий: 15/20, средняя оценка: 4.65</p>
            <div className="buttons">
                <button onClick={showTestStats}>Статистика тестов</button>
                <button onClick={showPractiseStats}>Статистика практики</button>
                <button onClick={showRaiting}>Место в рейтинге</button>
            </div>
            <div className="stats">
                <p>{practiseStats || raiting}</p>
                {logo}
            </div>
        </div>
    )
}