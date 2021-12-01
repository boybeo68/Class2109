import React, { Component } from 'react';

class Child extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.data !== nextProps.data) {
            return true;
        }
        return false;
    }
    render() {
        console.log('renderChild');
        return (
            <div>
                Child {this.props.data}
                Biểu đồ Bitcoin
            </div>
        );
    }
}

export default Child;