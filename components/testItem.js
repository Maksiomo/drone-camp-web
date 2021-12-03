import styles from './test.module.css'

export default function TestItem ({id, title, answears}) {
    let count = 0;
    return(
        <fieldset id={"form" + id}>
            <p>{title}</p>
            {answears.map(ans => 
            <div key={"form" + id + "radio" + count}>
                <input 
                    type="radio"
                    id={`form${id}radio${count}`}
                    name={"answear" + id}
                    value="false"
                />
                <label htmlFor={`form${id}radio${count++}`}>{ans}</label>
            </div>
            )}
        </fieldset>
    )
}