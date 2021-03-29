import React, { Component } from 'react';
import ErrorBoundaries from './errorBoundary';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        if(this.state.count > 4) throw new Error('I am crashed');
        return (
            <button onClick={() => this.setState({count: this.state.count + 1})}>Click me {this.state.count}</button>
        );
    }
}

const CheckError = () => {
    return (
        <ErrorBoundaries>
            <Counter />
        </ErrorBoundaries>
    )
}
export default CheckError

