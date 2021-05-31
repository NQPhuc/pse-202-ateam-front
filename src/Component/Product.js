import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea } from '@material-ui/core';
import useStyles from './ProductStyles';

import { Link } from 'react-router-dom';

import { AddShoppingCart, PinDropSharp } from '@material-ui/icons'
const Product = ({ product, onAddToCart}) => {

    const styles = useStyles();


    return (
        <Card className={styles.root} >
            <Link to={"/item/" + product._id}>
                <CardMedia className={styles.media} image={"../img/" + product.image} title={product.Name} />
            </Link>
            <CardContent>
                <div className={styles.cardContent}>
                    <Typography variant='h4'>{product.Name}</Typography>
                    <Typography variant='h5' className={styles.price}>${product.Price}</Typography>
                </div>
                <Typography variant='h5' color='textSecondary'>Quantity: {product.Quantity}</Typography>
                <Typography variant='h5' color='textSecondary'>Size: {product.Size}</Typography>
                <Typography variant='h5'>Color: {product.Color}</Typography>
            </CardContent>

            <CardActions disableSpacing className={styles.cardActions}>
                <IconButton aria-label="Add to cart" onClick={()=> onAddToCart(product._id)}>
                    <AddShoppingCart style={{fontSize: "23"}}/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
export default Product;