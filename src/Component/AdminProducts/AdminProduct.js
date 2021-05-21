import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import {Link} from 'react-router-dom';
const AdminProduct = (props) => {
    const deleteItem = () => {
        alert("not implemented");
    }
    const editItem = () => {
        alert("not implemented");
    }
    return (<Card>
        <CardMedia />
        <CardContent>
            <div className="product-block">
                <div className="product-info">
                    <Typography
                        variant="body1"
                        style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                        {props.product._id}
                    </Typography>
                    <Link to={"/item/" + props.product._id} className="product-image">
                        <img src={"../../img/" + props.product.image} width="150" height="150" />
                    </Link>
                    <div className="product-detail">
                        <Typography variant="h4">{props.product.Name}</Typography>
                        <Typography variant="body1">Color: {props.product.Color}</Typography>
                        <Typography variant="body1">Size: {props.product.Size}</Typography>
                        <Typography variant="body1">Stock: {props.product.Quantity}</Typography>
                        <Typography variant="h6" style={{ "font-weight": "bold" }}>$ {props.product.Price}</Typography>
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