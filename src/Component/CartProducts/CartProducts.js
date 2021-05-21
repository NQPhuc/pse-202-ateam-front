import React from 'react'
import CartProduct from './CartProduct.js'
import { Grid } from '@material-ui/core'
import cartData from '../../testData/cartData.js';

import * as http from '../../services';

export default class CartProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        const sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (sessionId) {
            http.UserService.getUserCartContent().then((value) => {
                if (value) {
                    console.log(value);
                    this.setState({ cart: value.CartContent });
                }
                else {
                    console.log(value.CartContent);
                    this.setState({ cart: [] });
                }
            })
        }
        else {
            this.setState({ cart: [] });
        }
    }
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {this.state.cart.map(cart => (
                        <Grid item key={cart._id} xs={8} lg={5}>
                            <CartProduct cart={cart} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
};