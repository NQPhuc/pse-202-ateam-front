import React from 'react'
import CartProduct from './CartProduct.js'
import { Grid, Typography } from '@material-ui/core'

import * as http from '../../services';

export default class CartProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            totalPrice: 0
        }
        this.updateTotal = this.updateTotal.bind(this);
    }
    componentDidMount() {
        http.UserService.getUserCartContent().then((value) => {
            if (value) {
                this.setState({ cart: value.CartContent }, () => {
                    this.updateTotal();
                });
            }
            else {
                this.setState({ cart: [], totalPrice: 0 });
            }
        })
    }
    updateTotal() {
        http.UserService.getCartTotalPrice().then((price) => {
            if (price) {
                this.setState({ totalPrice: price });
            }
            else if (price === "Invalid Session") {
                alert("NOT LOGGED IN");
                window.location.href = "/";
            }
        })
    }
    render() {
        if (this.state.cart.length) {
            return (
                <main>
                    <Grid container justify="center" spacing={4}>
                        {this.state.cart.map(item => (
                            <Grid item key={item._id} xs={8} lg={5}>
                                <CartProduct cart={item} updateTotal={this.updateTotal} />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h5" style={{ textAlign: "center", paddingTop: 20 }}>Total Price: $ {this.state.totalPrice}</Typography>
                </main>
            );
        }
        else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: 50 }}>CART IS EMPTY</h1>
                </div>
            )
        }
    }
};