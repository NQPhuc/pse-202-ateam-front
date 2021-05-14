import React from 'react'
import Product from './Product'
import {Grid} from '@material-ui/core'

import giay1 from '../img/giay1.png'
import giay2 from '../img/giay2.jpg'
import giay3 from '../img/giay3.png'
import giay4 from '../img/giay4.jpg'
// import giay5 from '../img/giay5.jpg'

import * as http from '../services'; //import these to call API

const exampleProducts = [
    { id: 1, name: 'Yezzy', description: 'Running shoes', price: '300$', img: giay1 },
    { id: 2, name: 'Yezzy v2', description: 'Fashion shoes', price: '100$', img: giay2 },
    { id: 3, name: 'Nike', description: 'Running shoes', price: '50$', img: giay3 },
    { id: 4, name: 'ekiN', description: 'Basketball shoes', price: '80$', img: giay4 },
    // {id: 5,name:'YzzeY', description:'Scoccer shoes', price: '10$', img:giay5},
];
export default class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        http.ProductService.getAllProduct().then((value) => {
            if (value) {
                console.log(value);
                this.setState({products: value });
            }
        })
    }

    render() {
        return (
            <Grid container justify="center" spacing={4}>
                {
                    this.state.products.map((p) => (
                        <Grid item key={p._id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={p} />
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}
