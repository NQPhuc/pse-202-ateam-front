import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea } from '@material-ui/core';
import useStyles from './ProductStyles';

import { Link } from 'react-router-dom';

import { AddShoppingCart } from '@material-ui/icons'
const Product = ({ product, onAddToCart, setItemViewPID }) => {

    const styles = useStyles();
    const handlerAddtoCart = () => onAddToCart(product.id)
    return (
        <Card className={styles.root} >
            <Link to={"/item/" + product._id}>
                <CardMedia className={styles.media} image={"../img/" + product.image} title={product.Name} />
            </Link>
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
                <IconButton aria-label="Add to cart" onClick={handlerAddtoCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default Product;