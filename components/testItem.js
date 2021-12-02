import Link from 'next/link'
import { useLayoutEffect } from 'react/cjs/react.development'
import styles from './test.module.css'

export default function TestItem ({id, title, var1, var2}) {
    return(
        <>
        
        <div className={styles.test_item}>
            <h5>{title}</h5>
            <ul>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={false}/>
                        <span>{var1}</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked={false}/>
                        <span>{var2}</span>
                    </label>
                </li>
            </ul>
        </div>
        </>
        
    )
}