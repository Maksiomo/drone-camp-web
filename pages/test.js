import Nav from '../components/nav'
import TestItem from '../components/testItem'
import {useState} from 'react'
import styles from '../components/test.module.css'

export default function Test() {
  const [results, setResults] = useState("");
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
    let res = 0, maxRes = 2;
    res = event.target.form1radio0.checked ? res + 1 : res + 0;
    res = event.target.form2radio0.checked ? res + 1 : res + 0;
    setResults(`Правильных ответов ${res} из ${maxRes}`);
  }

  return (
    <div>
      <Nav pressed={"test"}/>
      <main className="test">
        <div className={styles.container}>
          <form onSubmit={submit}>
            {questions.map(question => <TestItem key={question.id} {...question} />)}
            <div>
              <button type="submit">Отправить ответы</button>
            </div>
          </form>
          <p>{results}</p>
        </div>
      </main>
    </div>
  )
}