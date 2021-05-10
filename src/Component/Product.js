import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
const Product = ({product}) => {
    return (<Card>
            <CardMedia/>
            <CardContent>
            <div>
                <Typography variant='h5'>{product.name}</Typography>
                <Typography variant='h5'>{product.price}</Typography>
            </div>
            <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
    </Card>);
}
export default Product;