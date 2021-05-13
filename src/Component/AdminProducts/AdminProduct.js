import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
const AdminProduct = ({ product }) => {
    const deleteItem = () => {
        alert("bruh");
    }
    const editItem = () => {
        alert("bruh");
    }
    return (<Card>
        <CardMedia />
        <CardContent>
            <div className="product-block">
                <div className="product-info">
                    <Typography
                        variant="body1"
                        style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                        {product.id}
                    </Typography>
                    <a href={"/product/" + product.id} className="product-image">
                        <img src={product.image} width="150" height="150" />
                    </a>
                    <div className="product-detail">
                        <Typography variant="h4">{product.name}</Typography>
                        <Typography variant="body1">Color: {product.color}</Typography>
                        <Typography variant="body1">Size: {product.size}</Typography>
                        <Typography variant="body1">Stock: {product.stock}</Typography>
                        <Typography variant="h6" style={{ "font-weight": "bold" }}>{product.price}</Typography>
                    </div>
                </div>
            </div>
        </CardContent>
        <CardActions >
            <IconButton onClick={() => deleteItem()}><Delete /></IconButton>
            <Button font-size="16px" onClick={() => editItem()}>EDIT PRODUCT</Button>
        </CardActions>
    </Card>);
}
export default AdminProduct;