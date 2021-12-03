import styles from './test.module.css'
import {useState} from 'react'

export default function TestItem ({id, title, answears}) {
    let count = 0;

    return(
        <div className={styles.test_item}>
        <fieldset id={"form" + id}>
            <p>{title}</p>
            <hr></hr>
            {answears.map(ans => 
            <div key={"form" + id + "radio" + count}>
                <input 
                    type="radio"
                    id={`form${id}radio${count}`}
                    name={`answear${id}`}
                    value="false"
                />
                <label htmlFor={`form${id}radio${count++}`}>{ans}</label>
            </div>
            )}
        </fieldset>
        </div>
    )
}