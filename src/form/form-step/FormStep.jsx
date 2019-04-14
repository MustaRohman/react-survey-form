import React from 'react';
import './FormStep.scss'

function FormStep(props) {
    const inputs = props
        .inputs
        .map((item, index) => <div key={index}>
            <label htmlFor={item.key}>{item.label + ':'}</label>
            <input type={item.type} id={item.key} onChange={props.onChange} value={item.value}></input>
        </div>)
    return <form className="FormStep">
        {inputs}
        <input type="submit"></input>
    </form>
}

export default FormStep;