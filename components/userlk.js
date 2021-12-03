import user from '../public/user.png'
import Image from 'next/image'
import styles from './userlk.module.css'
import { useState } from 'react'
import {Bar} from 'react-chartjs-2';
import {Radar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const points = {
    labels: ['Законы', 'Правила полета', 'Управление', 'Осмотр сетей', 'Сложные условия', 'Общий тест'],
    datasets: [{
      label: 'Правильные ответы',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }

  const flight = {
    labels: ['Управление', 'Удержание', 'Облёт', 'Препятствия', 'Сложные условия', 'Общий тест'],
    datasets: [{
      label: 'Правильные ответы',
      data: [8, 14, 9, 12, 6, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }

  const average = {
    labels: ['Оценка за тест', 'Оценка за практику', 'Аккуратность'],
    datasets: [
      {
        label: 'Среднее',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [12, 5, 8]
      },
      {
        label: 'Вы',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [7, 9, 12]
      }
    ]
  };

export default function UserLk () {
    const [testStats, setTestStats] = useState("")
    function showTestStats(){
        if(testStats === "") {
        setTestStats("Баллов: 44 из 120")
        setRaiting("")
        setPractiseStats("")
        window.scrollTo(0,document.body.scrollHeight)
        } 
        else setTestStats("")
    }
    const [practiseStats, setPractiseStats] = useState("")
    function showPractiseStats(){
        if (practiseStats === "") {
            setPractiseStats("Баллов за полет: 53 из 120")
            setRaiting("")
            setTestStats("")
            window.scrollTo(0,document.body.scrollHeight)
        }
        else setPractiseStats("")
    }
    const [raiting, setRaiting] = useState("")
    function showRaiting(){
        if (raiting === "") {
            setRaiting("15 место из 35 студентов")
            setTestStats("")
            setPractiseStats("")
            window.scrollTo(0,document.body.scrollHeight)
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
                <p>{testStats || practiseStats || raiting}</p>
            </div>
            {testStats ? <div className="graph">
                <Bar
                    data={points}
                    width={40}
                    height={20}
                />
            </div>
            : null}
            {practiseStats ? <div className="graph">
                <Bar
                    data={flight}
                    width={40}
                    height={20}
                />
            </div>
            : null}
            {raiting ? <div className="graph">
                <Radar
                    data={average}
                    width={40}
                    height={40}
                />
            </div>
            : null}
        </div>
    )
}