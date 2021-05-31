import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import Counter from '../Counter.js';

import * as http from '../../services';

class CartProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.cart.Quantity,
            productCartInfo: null
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        const { updateTotal } = this.props;
        updateTotal();
        this.setState({ quantity: e }, () => {
            if (this.state.quantity === 0) {
                this.deleteItem(this.props.cart.ProductId);
            }
        });
    }
    deleteItem = (productId) => {
        http.UserService.removeProductFromCart(productId).then((value) => {
            if (value === "OK") {
                window.location.reload();
            }
            else if (value === "Invalid session") {
                alert("PLEASE LOGIN AGAIN");
                window.location.href = "/";
            }
            else {
                alert("PRODUCT NOT EXIST");
            }
        })
    }
    componentDidMount() {
        http.ProductService.getProduct(this.props.cart.ProductId).then((value) => {
            if (value) {
                this.setState({ productCartInfo: value });
            }
            else {
                this.setState({ productCartInfo: null });
            }
        })
    }
    // componentDidUpdate() {
    //     if (this.state.quantity === 0) {
    //         this.deleteItem(this.props.cart.ProductId);
    //     }
    // }
    render() {
        if (this.state.productCartInfo) {
            const { productCartInfo } = this.state;
            return (
                <Card>
                    <CardContent>
                        <div className="product-block">
                            <div className="product-info">
                                <Link to={"/item/" + productCartInfo._id} className="product-image">
                                    <img src={"../../img/" + productCartInfo.image} width="150" height="150" />
                                </Link>
                                <div className="product-detail">
                                    <Typography variant="h4">{productCartInfo.Name}</Typography>
                                    <Typography variant="body1">Color: {productCartInfo.Color}</Typography>
                                    <Typography variant="body1">Size: {productCartInfo.Size}</Typography>
                                    <Typography variant="body1">Quantity: {this.state.quantity}</Typography>
                                    <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: 15 }}>$ {productCartInfo.Price * this.state.quantity}</Typography>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions >
                        <IconButton onClick={() => this.deleteItem(productCartInfo._id)}><Delete /></IconButton>
                        <Counter quantity={this.state.quantity} handleChange={this.handleChange} id={productCartInfo._id} />
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