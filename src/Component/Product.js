import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea} from '@material-ui/core';
import useStyles from './ProductStyles';
import {AddShoppingCart} from '@material-ui/icons'
const Product = ({product}) => {
    const styles = useStyles();
    //console.log(product.image)
    return (
    <Card className={styles.root}>
            <CardMedia className={styles.media} image={"../img/" + product.image} title={product.Name}/>
            <CardContent>
            <div className={styles.cardContent}>
                <Typography variant='h5'>{product.Name}</Typography>
                <Typography variant='h5'>{product.Price.$numberDecimal}</Typography>
            </div>
            <Typography variant='body2' color='textSecondary'>Quantity: {product.Quantity}</Typography>
            <Typography variant='body2' color='textSecondary'>Size: {product.Size}</Typography>
            <Typography variant='h4'>Color: {product.Color}</Typography>
            </CardContent>

            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
    </Card>);
}
export default Product;