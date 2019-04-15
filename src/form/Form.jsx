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
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleSubmit(event) {
        console.log('submit', event);
        let stepNumber = this.state.stepNumber;
        event.preventDefault();
        if (stepNumber === 0) {
            if (!this.state.title || !this.state.name || !this.state.dob) {
                alert('Please ensure that all fields are complete before clicking submit');
            } else {
                stepNumber++;
                this.setState({stepNumber});
            }
        } else if (stepNumber === 1) {
            if (!this.state.location || !this.state.dateTime || !this.state.userFeedback) {
                alert('Please ensure that all fields are complete before clicking submit');
            } else {
                // Request to API endpoint 'submit-survey'
                console.log(this.state);
                alert('Thank you for completing the survey!');
            }
        }
    }

    handlePrev(event) {
        console.log('submit', event);
        event.preventDefault();
        let stepNumber = this.state.stepNumber;
        stepNumber--;
        this.setState({stepNumber})
    }

    handleChange(key, value) {
        // this.setState({title: event.target.value})
        this.setState({[key]: value})
    }

    render() {
        const inputsOne = [
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
        const inputsTwo = [
            {
                label: 'Current Location',
                key: 'location',
                type: 'location',
                value: this.state.location
            },
            {
                label: 'Current Date/Time',
                key: 'dateTime',
                type: 'datetime',
                value: this.state.dateTime
            },
            {
                label: 'User Feedback',
                key: 'userFeedback',
                type: 'textarea',
                value: this.state.userFeedback
            },
        ]
        return (
            <div >
                {this.state.stepNumber === 0 ? (<FormStep inputs={inputsOne} onChange={this.handleChange} onSubmit={(e) => this.handleSubmit(e)}></FormStep>): ''}
                {this.state.stepNumber === 1 ? (<FormStep inputs={inputsTwo} onChange={this.handleChange} onSubmit={(e) => this.handleSubmit(e)} onPrevClick={this.handlePrev}></FormStep>): ''}
            </div>
        )
    }
}

export default Form;