import Nav from '../components/nav'
import TestItem from '../components/testItem'
import {useState, useEffect} from 'react'
import styles from '../components/test.module.css'

export default function Test() {
  const [questions, setQuestions] = useState ([
        {id: 1, title: "Вопрос", var1: "вариант 1", var2: "вариант 2", chosen1: false, chosen2: false},
        {id: 2, title: "Вопрос 2", var1: "вариант 1", var2: "вариант 2", chosen1: false, chosen2: false},
  ])

  return (
    <div>
      <Nav picked={"test"}/>
      <main className="test">
        <div className={styles.container}>
        {questions.map(question => <TestItem key={question.id} {...question} />)}
        </div>
      </main>
    </div>
  )
}