import React, { useState } from 'react'
import AdminProduct from './AdminProduct.js'
import { Grid } from '@material-ui/core'
import data from '../../testData/data.js';

import * as http from '../../services'; //import these to call API

export default class AdminProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        http.ProductService.getAllProduct().then((value) => {
            if (value) {
                console.log(value);
                this.setState({products: value});
            }
        })
    }
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {this.state.products.map(product => (
                        <Grid item key={product._id} xs={8} lg={5}>
                            <AdminProduct product={product} />
                        </Grid>
                    ))}
                </Grid>
            </main>)
    }
};