import user from '../public/user.png'
import Image from 'next/image'
import styles from './userlk.module.css'
import { useState } from 'react'
import graphTest from '../public/graph_test.png'
import graphPractise from '../public/graph_practise.png'

export default function UserLk () {
    const [testPic, setTestPic] = useState("")
    function showTestPic(){
        if(testPic === "") {
        setTestPic(<Image alt="Tests statistics" src={graphTest} width={230} height={148}/>)
        setRaiting("")
        setPractisePic("")
        } 
        else {
            setTestPic("")
        }
    }
    const [practisePic, setPractisePic] = useState("")
    function showPractisePic(){
        if (practisePic === "") {
            setPractisePic(<Image alt="Practise statistics" src={graphPractise} width={230} height={148}/>)
            setTestPic("")
            setRaiting("")
        }
        else setPractisePic("")
    }
    const [raiting, setRaiting] = useState("")
    function showRaiting(){
        if (raiting === "") {
            setRaiting("45 место из 350 студентов")
            setTestPic("")
            setPractisePic("")
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
                <button onClick={showTestPic}>Статистика тестов</button>
                <button onClick={showPractisePic}>Статистика практики</button>
                <button onClick={showRaiting}>Место в рейтинге</button>
            </div>
            <div className="stats">
                <p>{raiting}</p>
                <p className="image">{testPic || practisePic}</p>
            </div>
        </div>
    )
}