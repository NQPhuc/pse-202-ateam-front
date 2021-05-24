import React from 'react';
import { Button, Typography } from '@material-ui/core';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.quantity
        };
    }
    handleIncrement() {
        const { handleChange } = this.props;
        handleChange(this.state.count + 1);
        this.setState({
            count: this.state.count + 1
        });
    };
    handleDecrement() {
        const { handleChange } = this.props;
        handleChange(this.state.count > 0 ? this.state.count - 1 : 0);
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        });
    };
    render() {
        return (
            <div style={{ "display": "flex", "justify-content": "center", "alignItems": "center" }}>
                <Button onClick={(e) => this.handleDecrement(e)}>-</Button>
                <Typography variant="h5">{this.state.count}</Typography>
                <Button onClick={(e) => this.handleIncrement(e)}>+</Button>
            </div >
        );
    }
};
export default Counter;