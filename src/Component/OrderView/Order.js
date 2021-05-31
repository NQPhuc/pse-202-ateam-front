import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import OrderProduct from '../OrderProduct';
import Payment from '../Payment/Payment';

import * as http from '../../services';

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.viewOrder = this.viewOrder.bind(this);
        this.state = {
            currentOrder: [],
            currentPayment: '',
            displayProducts: false,
            displayPayment: false,
        }
    }
    viewOrder = () => {
        const { order } = this.props;
        this.setState({ currentOrder: order.OrderContent['itemList'], displayProducts: !this.state.displayProducts });
    }
    makePayment = () => {
        const { order } = this.props;
        this.setState({ currentPayment: order._id, displayPayment: !this.state.displayPayment }, () => {
            console.log(`Making payment for order ${this.state.currentPayment}: ${this.state.displayPayment}`);
        });
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
                                variant="h5"
                                style={{ "paddingRight": "10px", "fontWeight": "bold" }}>
                                {order._id}
                            </Typography>
                            <div className="product-detail">
                                <div className="delivery-info" style={{ float: 'left' }}>
                                    <Typography variant="body1">Order Date: {order.OrderDate}</Typography>
                                    <Typography variant="body1">Recipent Name: {order.RecipientName}</Typography>
                                    <Typography variant="body1">Contact Number: {order.ContactNumber}</Typography>
                                    <Typography variant="body1">Delivery Address: {order.Address}</Typography>
                                </div>
                                <div className="order-info" style={{ float: 'right' }}>
                                    <Typography variant="body1">Price: $ {order.OrderContent['TotalPrice']}</Typography>
                                    <Typography variant="body1">Payment info: {order.PaymentInfo.info}</Typography>
                                    <Typography variant="body1">Payment status: {order.PaymentInfo.status ? "success" : "none"}</Typography>
                                    <Typography variant="body1">Delivery Status: {order.OrderStatus}</Typography>
                                </div>
                                {this.state.displayProducts ?
                                    <OrderProduct
                                        content={this.state.currentOrder}
                                        handleCloseProducts={() => this.setState({ displayProducts: !this.state.displayProducts })}
                                    /> : ""
                                }
                                { }
                                <Payment
                                    orderId={this.state.currentPayment}
                                    displaying={this.state.displayPayment}
                                    handleClosePayment={() => this.setState({ displayPayment: !this.state.displayPayment })}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        {!order.PaymentInfo.status ?
                            <Button onClick={this.viewOrder} style={{ width: "50%", height: 30 }}>View order detail</Button>
                            :
                            <Button onClick={this.viewOrder} style={{ width: "100%", height: 30 }}>View order detail</Button>
                        }
                        {
                            !order.PaymentInfo.status ?
                                <Button onClick={this.makePayment} style={{ width: "50%", height: 30 }}>Make payment</Button>
                                :
                                ""
                        }
                    </div>
                </CardContent>
            </Card >
        );
    }
}
export default Order;

