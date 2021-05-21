import React from 'react'
import Product from './Product'
import {Grid} from '@material-ui/core'


import * as http from '../services'; //import these to call API

export default class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: this.props.totalCartItems,
        }
    }

    componentDidMount() {
        http.ProductService.getAllProduct().then((value) => {
            if (value) {
                // console.log(value);
                this.setState({products: value });
            }
        })
    }
    
    onAddToCart = (productID) => {
        console.log(++this.state.total)
        this.props.displayTotalCartItems(this.state.total)
        console.log(productID)
    }

    render() {
        return (
            <Grid container justify="center" spacing={4}>
                {
                    this.state.products.map((p) => (
                        <Grid item key={p._id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={p} onAddToCart={this.onAddToCart}/>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}
