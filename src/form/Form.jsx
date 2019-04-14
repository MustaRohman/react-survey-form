import React, {Component} from 'react';
import './Form.scss';
import FormStep from './form-step/FormStep';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'ss',
            name: '',
            dob: '',
            location: '',
            dateTime: '',
            userFeedback: ''
        }
    }

    handleSubmit(event) {
        console.log('submit', event);
        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({title: event.target.value})
    }

    render() {
        const inputs = [
            {
                label: 'Title',
                key: 'label',
                type: 'text',
                value: this.state.title
            }
        ]
        return (
        // <form className="Form" onSubmit={(e) => this.handleSubmit(e)}>     <label>
        //      Title:         <input type="text" id="title" value={this.state.title}
        // onChange={(e) => this.handleChange(e)}></input>     </label>     <input
        // type="submit" value="Submit"></input> </form> < FormStep inputs = {} > </FormStep>)
            <FormStep inputs={inputs} onChange={(e) => this.handleChange(e)}></FormStep>
        )
    }
}

export default Form;