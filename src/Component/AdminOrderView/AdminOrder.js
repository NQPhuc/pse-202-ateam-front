import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
const AdminProduct = (props) => {
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
                    {/* <img src="https://unsplash.com/s/photos/random" width="100" height="100" /> */}
                    <div className="product-detail">
                        <div className="delivery-info" style={{ float: 'left' }}>
                            <Typography variant="body1">Order Date: {props.order.OrderDate}</Typography>
                            <Typography variant="body1">Order Status: {props.order.OrderStatus}</Typography>
                            <Typography variant="body1">Recipent Name: {props.order.RecipientName}</Typography>
                            <Typography variant="body1">Address: {props.order.Address}</Typography>
                        </div>
                        <div className="order-info" style={{ float: 'right' }}>
                            <Typography variant="h4">{props.order.Name}</Typography>
                            <Typography variant="body1">Order Date: {props.order.OrderDate}</Typography>
                            <Typography variant="body1">Order Status: {props.order.OrderStatus}</Typography>
                            <Typography variant="h6" style={{ "font-weight": "bold" }}></Typography>
                            <Typography variant="body1">Contact Number: {props.order.ContactNumber}</Typography>
                            <Link to={"/history-cart/" + props.order._id}>
                                <Button>View order detail</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card >);
}
export default AdminProduct;

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