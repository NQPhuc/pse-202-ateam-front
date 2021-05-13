import React from 'react'
import Product from './Product'
import { Grid } from '@material-ui/core'


const products = [
    { id: 1, name: 'Yezzy', description: 'Running shoes', price: '300$' },
    { id: 2, name: 'Yezzy v2', description: 'Running shoes', price: '100$' },
    { id: 3, name: 'Nike', description: 'Running shoes', price: '50$' },
    { id: 4, name: 'ekiN', description: 'Running shoes', price: '80$' },
    { id: 5, name: 'YzzeY', description: 'Running shoes', price: '10$' },
];
const Products = props => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>)
};
export default Products;