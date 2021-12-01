import React, { Component } from 'react';
import Child from './Child';

class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        };
        console.log('constructor');
    };
    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState,) {
        console.log('componentDidUpdate', prevProps, prevState.count, this.state.count);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    // tối ưu performance
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true
    }
    inCreeCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    // Lifecycle
    render() {
        console.log('render');
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.inCreeCount}>Click</button>
                <Child data={'data'} />
            </div>
        );
    }
}

export default Body;