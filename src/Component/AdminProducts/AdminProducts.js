import React, { useState } from 'react'
import AdminProduct from './AdminProduct.js'
import { Grid } from '@material-ui/core'
import data from '../../testData/data.js';
const AdminProducts = (props) => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {data.products.map(product => (
                    <Grid item key={product.id} xs={8} lg={5}>
                        <AdminProduct product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>)
};
export default AdminProducts;