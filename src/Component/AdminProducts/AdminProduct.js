import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom';

class AdminProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardMedia />
                <CardContent>
                    <div className="product-block">
                        <div className="product-info">
                            <Typography
                                variant="body1"
                                style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                {this.props.product._id}
                            </Typography>
                            <Link to={"/item/" + this.props.product._id} className="product-image">
                                <img src={"../../img/" + this.props.product.image} width="150" height="150" />
                            </Link>
                            <div className="product-detail">
                                <Typography variant="h4">{this.props.product.Name}</Typography>
                                <Typography variant="body1">Color: {this.props.product.Color}</Typography>
                                <Typography variant="body1">Size: {this.props.product.Size}</Typography>
                                <Typography variant="body1">Stock: {this.props.product.Quantity}</Typography>
                                <Typography variant="h6" style={{ "font-weight": "bold" }}>$ {this.props.product.Price}</Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardActions >
                    <IconButton onClick={() => alert("ARE YOU SURE?")}><Delete /></IconButton>
                    <Button font-size="16px" onClick={() => this.props.editPopUpDisplayingState_setter(true)}>EDIT PRODUCT</Button>
                </CardActions>
            </Card>);
    }
}
export default AdminProduct;