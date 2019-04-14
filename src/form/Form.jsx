import React, { Component} from 'react';
import './Form.scss';

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
        return (
            <form className="Form" onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={(e) => this.handleChange(e)}></input>
                </label>             
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form;