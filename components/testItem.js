import Link from 'next/link'
import { useLayoutEffect } from 'react/cjs/react.development'
import styles from './test.module.css'

export default function TestItem () {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.test_item}>
            <h5>Вопрос</h5>
            <ul>
                <li>вариант 1</li>
                <li>вариант 2</li>
            </ul>
        </div>
        <div className={styles.test_item}>
            <h5>Вопрос 2</h5>
            <ul>
                <li>вариант 1</li>
                <li>вариант 2</li>
            </ul>
        </div>
        </div>
        </>
        
    )
}