import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
const Order = (props) => {
    return (<Card>
        <CardMedia />
        <CardContent>
            <div className="product-block">
                <div className="product-info">
                    <Typography
                        variant="body1"
                        style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                        {props.order._id}
                    </Typography>
                    <div className="product-detail">
                        <div className="delivery-info" style={{ float: 'left' }}>
                            <Typography variant="body1">Order Date: {props.order.OrderDate}</Typography>
                            <Typography variant="body1">Delivery Address: {props.order.Address}</Typography>
                            <Typography variant="body1">Delivery Status: {props.order.OrderStatus}</Typography>
                        </div>
                        <div className="order-info" style={{ float: 'right' }}>
                            <Typography variant="body1">Recipent Name: {props.order.RecipientName}</Typography>
                            <Typography variant="h6" style={{ "font-weight": "bold" }}></Typography>
                            <Typography variant="body1">Contact Number: {props.order.ContactNumber}</Typography>
                            <Link to={"/order/" + props.order._id}>
                                <Button>View order detail</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card >);
}
export default Order;