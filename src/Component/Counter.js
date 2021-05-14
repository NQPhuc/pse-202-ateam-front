import React from 'react';
import { Button, Typography } from '@material-ui/core';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.quantity
        };
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement() {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        });
    };
    render() {
        return (
            <div style={{ "display": "flex", "justify-content": "center", "alignItems": "center"}}>
                <Button onClick={(e) => this.decrement(e)}>-</Button>
                <Typography variant="h6">{this.state.count}</Typography>
                <Button  onClick={(e) => this.increment(e)}>+</Button>
            </div >
        );
    }
};
export default Counter;