import React, {Component} from 'react';
import './Form.scss';
import FormStep from './form-step/FormStep';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            name: '',
            dob: '',
            location: '',
            dateTime: '',
            userFeedback: '',
            stepNumber: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        let stepNumber = this.state.stepNumber;
        console.log('submit', event);
        event.preventDefault();
        if (stepNumber === 0) {
            if (!this.state.title || !this.state.name || !this.state.dob) {
                alert('Please ensure that all fields are complete before clicking submit');
            } else {
                stepNumber++;
                this.setState({stepNumber});
            }
        }
    }

    handleChange(key, value) {
        console.log(event.target.value);
        // this.setState({title: event.target.value})
        this.setState({[key]: value})
    }

    render() {
        const inputs = [
            {
                label: 'Title',
                key: 'title',
                type: 'text',
                value: this.state.title
            },
            {
                label: 'Name',
                key: 'name',
                type: 'text',
                value: this.state.name
            },
            {
                label: 'Date of Birth',
                key: 'dob',
                type: 'date',
                value: this.state.dob
            },
        ]
        return (
        // <form className="Form" onSubmit={(e) => this.handleSubmit(e)}>     <label>
        //      Title:         <input type="text" id="title" value={this.state.title}
        // onChange={(e) => this.handleChange(e)}></input>     </label>     <input
        // type="submit" value="Submit"></input> </form> < FormStep inputs = {} > </FormStep>)
            <FormStep inputs={inputs} onChange={this.handleChange} onSubmit={(e) => this.handleSubmit(e)}></FormStep>
        )
    }
}

export default Form;