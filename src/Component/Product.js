import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea} from '@material-ui/core';
import useStyles from './ProductStyles';
import {AddShoppingCart} from '@material-ui/icons'
const Product = ({product}) => {
    const styles = useStyles();
    console.log(product.img)
    return (
    <Card className={styles.root}>
            <CardMedia className={styles.media} image={product.img} title={product.name}/>
            <CardContent>
            <div className={styles.cardContent}>
                <Typography variant='h5'>{product.name}</Typography>
                <Typography variant='h5'>{product.price}</Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>{product.description}</Typography>
            <Typography variant='h4'>Kannye West created this shoes</Typography>
            </CardContent>

            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
    </Card>);
}
export default Product;