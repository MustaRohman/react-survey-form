import React from 'react';
import './FormStep.scss'

function FormStep(props) {
    /**
     * PROPS
     * inputs: [{label, key, type, value}]
     * onChange: (key, value) => {}
     * onSubmit: (ev) => {}
     */
    function handleChange(ev, key) {
        ev.preventDefault();
        console.log('handleChange', key);
        props.onChange(key, ev.target.value);
    }
    const inputs = props
        .inputs
        .map((item, index) => <div className="inputItem" key={index}>
            <label htmlFor={item.key}>{item.label + ':'}</label>
            <input type={item.type} id={item.key} onChange={(e) => handleChange(e, item.key)} value={item.value}></input>
        </div>)
    return (
        <form className="FormStep" onSubmit={props.onSubmit}>
            {inputs}
            <input type="submit" ></input>
        </form>
    )
}

export default FormStep;