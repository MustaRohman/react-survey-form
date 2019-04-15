import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Form from './form/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Survey Form</h1>
                <Form></Form>
                <footer>I read the instructions</footer>
            </div>
        );
    }
}

export default hot(module)(App);