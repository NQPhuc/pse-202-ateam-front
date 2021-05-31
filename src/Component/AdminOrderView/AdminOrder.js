import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';
import OrderProduct from '../OrderProduct';

import * as http from '../../services';
const val = { "Processing": 0, "Packaging": 1, "Delivering": 2, "Complete": 3 };

class AdminOrder extends React.Component {
    constructor(props) {
        super(props);
        this.viewOrder = this.viewOrder.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            currentOrder: [],
            orderStatus: this.props.order.OrderStatus,
            displaying: false
        }
    }
    componentDidMount() {
        this.setState({ orderStatus: val[this.props.order.OrderStatus] });
    }
    viewOrder = () => {
        const { order } = this.props;
        this.setState({ currentOrder: order.OrderContent['itemList'], displaying: !this.state.displaying });
    }
    changeStatus = (e) => {
        const { order } = this.props;
        http.OrderService.setOrderStatus(order._id, e).then((value) => {
            if (value === "OK") {
                console.log("ORDER UPDATED");
            }
            else if (value === "Invalid session") {
                alert("PLEASE LOGIN AGAIN");
                window.location.href = "/";
            }
            else {
                alert("CHANGE FAILED");
                window.location.reload();
            }
        })
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
                                    <Typography variant="body1">Customer Name: {order.CustomerName}</Typography>
                                    <Typography variant="body1">Recipent Name: {order.RecipientName}</Typography>
                                    <Typography variant="body1">Contact Number: {order.ContactNumber}</Typography>
                                    <Typography variant="body1">Delivery Address: {order.Address}</Typography>
                                </div>
                                <div className="order-info" style={{ float: 'right' }}>
                                    <Typography variant="body1">Price: $ {order.OrderContent['TotalPrice']}</Typography>
                                    <Typography variant="body1">Payment info: {order.PaymentInfo.info}</Typography>
                                    <Typography variant="body1">Payment status: {order.PaymentInfo.status ? "success" : "none"}</Typography>
                                    <div>
                                        <Typography variant="body1">Delivery Status: {
                                            (
                                                <Select autoWidth="true" variant="outlined" labelId="label" id="select" value={this.state.orderStatus} onChange={(e) =>
                                                    this.setState({ orderStatus: e.target.value }, () => {
                                                        this.changeStatus(e.target.value);
                                                    })
                                                }
                                                >
                                                    <MenuItem key={0} value={0}>Processing</MenuItem>
                                                    <MenuItem key={1} value={1}>Packaging</MenuItem>
                                                    <MenuItem key={2} value={2}>Delivering</MenuItem>
                                                    <MenuItem key={3} value={3}>Complete</MenuItem>
                                                </Select>
                                            )
                                        }
                                        </Typography>
                                    </div>
                                </div>
                                {this.state.displaying ?
                                    <OrderProduct content={this.state.currentOrder} handleCloseProducts={() => {
                                        this.setState({ displaying: !this.state.displaying });
                                        console.log("MODAL CLOSED");
                                    }} />
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    </div>
                    <Button onClick={this.viewOrder} style={{ width: "100%", marginTop: 10, height: 30 }}>View order detail</Button>
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