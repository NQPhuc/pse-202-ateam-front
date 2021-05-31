import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom';

import * as http from '../../services';

class AdminProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    disableProduct = (productId) => {
        http.ProductService.disableProduct(productId).then((value) => {
            if (value === "OK") {
                console.log("DISABLED");
                window.location.reload();
            }
            else {
                console.log("FAILED");
                alert("CAN'T DELETE THE PRODUCT");
            }
        })
    }
    render() {
        const { product } = this.props;
        return (
            <Card>
                <CardMedia />
                <CardContent>
                    <div className="product-block">
                        <div className="product-info">
                            <Typography
                                variant="body1"
                                style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                {product._id}
                            </Typography>
                            <Link to={"/item/" + product._id} className="product-image">
                                <img src={"../../img/" + product.image} width="150" height="150" />
                            </Link>
                            <div className="product-detail">
                                <Typography variant="h4">{product.Name}</Typography>
                                <Typography variant="body1">Color: {product.Color}</Typography>
                                <Typography variant="body1">Size: {product.Size}</Typography>
                                <Typography variant="body1">Stock: {product.Quantity}</Typography>
                                <Typography variant="h6" style={{ "font-weight": "bold" }}>$ {product.Price}</Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardActions >
                    <IconButton onClick={() => this.disableProduct(product._id)}><Delete /></IconButton>
                    <Button font-size="16px" onClick={() => this.props.editPopUpDisplayingState_setter(true)}>EDIT PRODUCT</Button>
                </CardActions>
            </Card>);
    }
}
export default AdminProduct;