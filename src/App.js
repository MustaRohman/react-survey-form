import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Form from './form/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Survey Form</h1>
                <h2>Please enter your details in the form below</h2>
                <Form></Form>
            </div>
        );
    }
}

export default hot(module)(App);