import Link from 'next/link'
import { useLayoutEffect } from 'react/cjs/react.development'
import styles from './test.module.css'
import { useState } from 'react'

export default function TestItem ({id, title, var1, var2, chosen1, chosen2}) {
    const [checked1, setChecked1] = useState(chosen1)
    const [checked2, setChecked2] = useState(chosen2)
    const cls1 = ['answer1']
    if(checked1){
        cls1.push('chosen1')
    }
    const cls2 = ['answer2']
    if(checked2){
        cls2.push('chosen2')
    }
    return(
        <>
        
        <div className={styles.test_item}>
            <h5>{title}</h5>
            <ul>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={chosen1}
                        onChange={() =>{
                            setChecked1(!checked1)
                        }}/>
                        <span>{var1}</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={chosen2}
                        onChange={() =>{
                            setChecked2(!checked2)
                        }}/>
                        <span>{var2}</span>
                    </label>
                </li>
            </ul>
        </div>
        </>
        
    )
}