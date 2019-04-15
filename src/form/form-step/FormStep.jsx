import React from 'react';
import * as moment from 'moment';
import './FormStep.scss'

/**
 * Represents a 'page' or 'step' in the Form component
 * PROPS
 * inputs: [{label, key, type, value}]
 * onChange: (key, value) => {}
 * onSubmit: (ev) => {}
 * onPrev: () => {}
 * @param {*} props
 */
function FormStep(props) {
    function handleChange(ev, key) {
        ev.preventDefault();
        console.log('handleChange', key);
        props.onChange(key, ev.target.value);
    }

    function handleLocationClick(e, key) {
        e.preventDefault();
        console.log('handleLocationClick', key);
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(pos => {
                    console.log(pos);
                    props.onChange(key, pos.coords);
                }, err => {
                    console.log(err);
                    props.onChange(key, 'Location Unavailable');
                })
        } else {
            props.onChange(key, 'Location Unavailable');
        }
    }

    function handleDateTimeClick(e, key) {
        e.preventDefault();
        const dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        console.log(dateTime);
        props.onChange(key, dateTime);
    }

    const inputs = props
        .inputs
        .map((item, index) => {
            switch (item.type) {
                case 'location':
                    {
                        return (
                            <div className="inputItem" key={index}>
                                <label htmlFor={item.key}>{item.label + ':'}</label>
                                <div>
                                    <button className="input" onClick={(e) => handleLocationClick(e, item.key)}>
                                        {item.value
                                            ? 'Lat: ' + item.value.latitude + ' Lon:' + item.value.longitude
                                            : 'Click to get Location'}
                                    </button>

                                </div>
                            </div>
                        )
                    }
                case 'datetime':
                    {
                        return (
                            <div className="inputItem" key={index}>
                                <label htmlFor={item.key}>{item.label + ':'}</label>
                                <div>
                                    <button className="input" onClick= { (e) => handleDateTimeClick(e, item.key) }>
                                        {item.value
                                            ? item
                                                .value
                                                .toString()
                                            : 'Click to get Current Date/Time'}
                                    </button>
                                </div>
                            </div>
                        )
                    }
                case 'textarea':
                    {
                        return (
                            <div className="inputItem" key={index}>
                                <label htmlFor={item.key}>{item.label + ':'}</label>
                                <textarea
                                    className="input"
                                    type={item.type}
                                    id={item.key}
                                    onChange={(e) => handleChange(e, item.key)}
                                    value={item.value}></textarea>
                            </div>
                        )
                    }
                default:
                    {
                        return (
                            <div className="inputItem" key={index}>
                                <label htmlFor={item.key}>{item.label + ':'}</label>
                                <input
                                    type={item.type}
                                    id={item.key}
                                    onChange={(e) => handleChange(e, item.key)}
                                    value={item.value}></input>
                            </div>
                        )
                    }
            }
        })
    return (
        <form className="FormStep" onSubmit={props.onSubmit}>
            {inputs}
            <div className="bottom-buttons">
                {props.onPrevClick
                    ? (
                        <input onClick={props.onPrevClick} type="submit" value="Back"></input>
                    )
                    : ''}
                <input className="submit" type="submit"></input>
            </div>
        </form>
    )
}

export default FormStep;