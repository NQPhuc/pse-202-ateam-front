import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea} from '@material-ui/core';
import styles from './ProductStyles';
import {AddShoppingCart} from '@material-ui/icons'
const Product = ({product}) => {
    console.log(product.img);
    return (
    <Card className={styles.root}>
            <CardMedia image={product.img}/>
            <CardContent>
            <div>
                <Typography variant='h5'>{product.name}</Typography>
                <Typography variant='h5'>{product.price}</Typography>
            </div>
            <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
            </CardContent>

                <CardActions disableSpacing className={styles.CardActions}>
                    <IconButton aria-label="Add to cart">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
    </Card>);
}
export default Product;