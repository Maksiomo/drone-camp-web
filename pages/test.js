import Nav from '../components/nav'
import TestItem from '../components/testItem'
import {useState} from 'react'
import styles from '../components/test.module.css'

export default function Test() {
  let answears = [
    ["вариант 1", "вариант 2"],
    ["вариант 1", "вариант 2", "вариант 3"]
  ];
  const [questions, setQuestions] = useState ([
        {id: 1, title: "Вопрос", answears: answears[0]},
        {id: 2, title: "Вопрос 2", answears: answears[1]},
  ])

  const submit = event => {
    event.preventDefault();
    console.log(event.target.form1);
  }

  return (
    <div>
      <Nav pressed={"test"}/>
      <main className="test">
        <div className={styles.container}>
          <form onSubmit={submit}>
            {questions.map(question => <TestItem key={question.id} {...question} />)}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}