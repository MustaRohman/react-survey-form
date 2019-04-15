import React from 'react';
import * as moment from 'moment';
import './FormStep.scss'

function FormStep(props) {
    /**
     * PROPS
     * inputs: [{label, key, type, value}]
     * onChange: (key, value) => {}
     * onSubmit: (ev) => {}
     * onPrev: () => {}
     */
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
                                <button onClick={(e) => handleLocationClick(e, item.key)}>
                                    {item.value
                                        ? 'Lat: ' + item.value.latitude + ' Lon:' + item.value.longitude
                                        : 'Click to get Location'}
                                </button>
                            </div>
                        )
                    }
                case 'datetime':
                    {
                        return (
                            <div className="inputItem" key={index}>
                                <label htmlFor={item.key}>{item.label + ':'}</label>
                                <div>

                                    <button onClick={(e) => handleDateTimeClick(e, item.key)}>
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
            <input type="submit"></input>
        </form>
    )
}

export default FormStep;