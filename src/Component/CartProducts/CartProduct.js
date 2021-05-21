import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete, ThreeSixtySharp } from '@material-ui/icons'
import Counter from '../Counter.js';

import * as http from '../../services';

class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart.Quantity,
            productInfo: null
        }
    }
    deleteItem() {
        alert("not implemented")
    }
    componentDidMount() {
        http.ProductService.getProduct(this.props.cart.ProductId).then((value) => {
            if (value) {
                this.setState({ productInfo: value });
            }
            else {
                this.setState({ productInfo: null });
            }
        })
    }
    render() {
        if (this.state.productInfo) {
            return (
                <Card>
                    <CardMedia />
                    <CardContent>
                        <div className="product-block">
                            <div className="product-info">
                                <Typography
                                    variant="body1"
                                    style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                    Cart ID: {this.props.cart._id}
                                </Typography>
                                <div className="product-detail">
                                    {/* <Typography variant="h4">Product ID: {this.props.cart.ProductId}</Typography> */}
                                    <Typography variant="body1">{this.state.productInfo.Name}</Typography>
                                    <Typography variant="body1">Quantity: {this.state.quantity}</Typography>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions >
                        <IconButton onClick={() => this.deleteItem()}><Delete /></IconButton>
                        <Counter quantity={this.state.quantity} />
                    </CardActions>
                </Card>
            );
        }
        else {
            return (<p>no no no</p>);
        }
    }
}
export default CartProduct;