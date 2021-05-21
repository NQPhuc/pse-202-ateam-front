import React from 'react'
import CartProduct from './CartProduct.js'
import { Grid } from '@material-ui/core'
import cartData from '../../testData/cartData.js';
export default class CartProducts extends React.Component {
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {cartData.cart.map(product => (
                        <Grid item key={product.id} xs={8} lg={5}>
                            <CartProduct product={product} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
};