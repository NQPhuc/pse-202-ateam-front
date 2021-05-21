import React, { Component } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Grid } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import * as http from '../../services';
import AdminOrder from './AdminOrder.js';
export default class AdminOrderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }
    componentDidMount() {
        http.OrderService.getAllOrder().then((value) => {
            if (value) {
                console.log(value);
                this.setState({ orders: value });
            }
        })
    }
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {this.state.orders.map(order => (
                        <Grid item key={order._id} xs={8} lg={5}>
                            <AdminOrder order={order}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
}