import React, { Component } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button, Grid } from '@material-ui/core';
import { Delete } from '@material-ui/icons'
import Order from './Order.js';

import * as http from '../../services';
export default class OrderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        }
    }
    componentDidMount() {
        http.OrderService.getOrderOfUser().then((value) => {
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
                            <Order order={order}/>
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
}