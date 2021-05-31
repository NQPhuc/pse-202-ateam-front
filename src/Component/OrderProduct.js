import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, Typography, Button, Grid, CardActions, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import * as http from '../services';

export default class OrderProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }
    componentDidMount() {
        this.props.content.map(item => {
            http.ProductService.getProduct(item.ProductId).then(value => {
                if (value) {
                    var obj = Object.assign({},
                        { id: item.ProductId }, { image: value.image }, { name: item.ProductName },
                        { quantity: item.Quantity }, { price: value.Price * item.Quantity })
                    this.setState({ productList: this.state.productList.concat(obj) }, () => {
                        console.log(`Item ${item.ProductId} is displayed`);
                    })
                }
                else {
                    console.log(`Item ${item.ProductId} is unable to be displayed`);
                }
            })
        })
    }
    render() {
        return (
            <div className="popup-box" style={{
                position: "fixed",
                background: "#00000050",
                width: "100%",
                height: "100vh",
                top: 0,
                "left": 0,
                "zIndex": 100
            }}>
                <div className="box" style={{
                    position: "relative",
                    width: "50%",
                    margin: "0 auto",
                    height: "auto",
                    "max-height": "100vh",
                    "margin-top": "calc(100vh - 85vh - 20px)",
                    background: "#fff",
                    "border-radius": "4px",
                    padding: "20px",
                    border: "1px solid #999",
                    overflow: "auto"
                }}>
                    <span className="close-icon" onClick={this.props.handleCloseProducts} style={{
                        content: 'x',
                        cursor: "pointer",
                        position: "fixed",
                        right: "calc(15% - 30px)",
                        top: "calc(100vh - 85vh - 33px)",
                        background: "#ededed",
                        width: "25px",
                        height: "25px",
                        "border-radius": "50%",
                        "line-height": "20px",
                        "text-align": "center",
                        border: "1px solid #999",
                        "font-size": "20px",
                    }}>x</span>
                    <Typography variant="h4">ORDER DETAIL</Typography>
                    <Grid container justify="center" direction="row" spacing={2}>
                        {this.state.productList.map(item => (
                            <Grid item key={item._id} xs={8} lg={8  }>
                                <div className="product-block">
                                    <div className="product-info">
                                        <Typography
                                            variant="body1"
                                            style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                            {item._id}
                                        </Typography>
                                        <Link to={"/item/" + item.id} className="product-image">
                                            <img src={"../../img/" + item.image} width="120" height="120" />
                                        </Link>
                                        <div className="product-detail">
                                            <Typography variant="h4">{item.name}</Typography>
                                            <Typography variant="body1">Quantity: {item.quantity}</Typography>
                                            <Typography variant="h6" style={{ "font-weight": "bold" }}>$ {item.price}</Typography>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        );
    }
}