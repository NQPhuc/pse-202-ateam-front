import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import OrderProduct from '../OrderProduct';

import * as http from '../../services';

class AdminOrder extends React.Component {
    constructor(props) {
        super(props);
        this.viewOrder = this.viewOrder.bind(this);
        this.state = {
            currentOrder: [],
            displaying: false
        }
    }
    viewOrder = () => {
        const { order } = this.props;
        this.setState({ currentOrder: order.OrderContent['itemList'], displaying: !this.state.displaying });
    }
    render() {
        const { order } = this.props;
        return (
            <Card>
                <CardMedia />
                <CardContent>
                    <div className="product-block">
                        <div className="product-info">
                            <Typography
                                variant="body1"
                                style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                {order._id}
                            </Typography>
                            <div className="product-detail">
                                <div className="delivery-info" style={{ float: 'left' }}>
                                    <Typography variant="body1">Order Date: {order.OrderDate}</Typography>
                                    <Typography variant="body1">Delivery Address: {order.Address}</Typography>
                                    <Typography variant="body1">Delivery Status: {order.OrderStatus}</Typography>
                                </div>
                                <div className="order-info" style={{ float: 'right' }}>
                                    <Typography variant="body1">Recipent Name: {order.RecipientName}</Typography>
                                    <Typography variant="h6" style={{ "font-weight": "bold" }}></Typography>
                                    <Typography variant="body1">Contact Number: {order.ContactNumber}</Typography>
                                    <Typography variant="body1">Price: $ {order.OrderContent['TotalPrice']}</Typography>
                                    <Button onClick={this.viewOrder}>View order detail</Button>
                                </div>
                                {this.state.displaying ?
                                    <OrderProduct content={this.state.currentOrder} handleClose={() => this.setState({ displaying: !this.state.displaying })} /> : ""
                                }
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card >
        );
    }
}
export default AdminOrder;

/*
{"_id":{"$oid":"60a1b59843103b61ba615cd7"},
    "OrderContent":{"itemList":[{"ProductId":"6090084e84f99e948808c64f","ProductName":"sneaker1","Quantity":1}],
    "TotalPrice":500},
    "ClientId":"60902e0584f99e948808c657",
    "CustomerName":"MrA",
    "RecipientName":"MsB",
    "Address":"Moon North Pole",
    "ContactNumber":"010101",
    "OrderDate":{"$date":"2021-05-18T00:00:00.000Z"},
    "OrderStatus":"Processing",
    "PaymentInfo":{"status":true,"info":"VISA 1111-2222-3333-4444"}}
    "__v: 0"
*/