import React from 'react'
import CartProduct from './CartProduct.js'
import { Grid, Typography } from '@material-ui/core'
import cartData from '../../testData/cartData.js';

import * as http from '../../services';

export default class CartProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            totalPrice: 0
        }
    }
    componentDidMount() {
        const sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (sessionId) {
            http.UserService.getUserCartContent().then((value) => {
                if (value) {
                    this.setState({ cart: value.CartContent });
                }
                else {
                    this.setState({ cart: [] });
                }
            })
        }
        else {
            this.setState({ cart: [] });
        }
    }
    render() {
        if (this.state.cart.length) {
            return (
                <main>
                    <Grid container justify="center" spacing={4}>
                        {this.state.cart.map(item => (
                            <Grid item key={item._id} xs={8} lg={5}>
                                <CartProduct cart={item} />
                            </Grid>
                        ))}
                    </Grid>
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