import React from 'react';
import { Button, Typography } from '@material-ui/core';

import * as http from '../services';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.quantity
        };
    }
    handleIncrement = (productId) => {
        const { handleChange } = this.props;
        handleChange(this.state.count + 1);
        this.setState({
            count: this.state.count + 1
        });
        http.UserService.addSingleItemToCart(productId).then((value) => {
            if (value) {
                console.log("incremented");
            }
            else {
                console.log("failed");
                alert("increment failed");
            }
        })
    };
    handleDecrement = (productId) => {
        const { handleChange } = this.props;
        handleChange(this.state.count > 0 ? this.state.count - 1 : 0);
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        });
        http.UserService.reduceOneItemFromCart(productId).then((value) => {
            if (value) {
                console.log("decremented");
            }
            else {
                console.log("failed");
                alert("decrement failed");
            }
        })
    };
    render() {
        return (
            <div style={{ "display": "flex", "justify-content": "center", "alignItems": "center" }}>
                <Button onClick={() => this.handleDecrement(this.props.id)}>-</Button>
                <Typography variant="h5">{this.state.count}</Typography>
                <Button onClick={(e) => this.handleIncrement(this.props.id)}>+</Button>
            </div >
        );
    }
};
export default Counter;