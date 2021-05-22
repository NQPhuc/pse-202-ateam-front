import React from 'react'
import { Link } from 'react-router-dom'
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
            const { productInfo } = this.state;
            return (
                <Card>
                    <CardContent>
                        <div className="product-block">
                            <div className="product-info">
                                <Link to={"/item/" + productInfo._id} className="product-image">
                                    <img src={"../../img/" + productInfo.image} width="150" height="150" />
                                </Link>
                                <div className="product-detail">
                                    <Typography variant="h4">{productInfo.Name}</Typography>
                                    <Typography variant="body1">Color: {productInfo.Color}</Typography>
                                    <Typography variant="body1">Size: {productInfo.Size}</Typography>
                                    <Typography variant="body1">Quantity: {this.props.cart.Quantity}</Typography>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions >
                        <IconButton onClick={() => this.deleteItem()}><Delete /></IconButton>
                        <Counter quantity={this.props.cart.Quantity} />
                    </CardActions>
                </Card>
            );
        }
        else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: 50 }}>ERROR: PRODUCT NOT FOUND (MIGHT BE DELETED IDK)</h1>
                </div>
            );
        }
    }
}
export default CartProduct;