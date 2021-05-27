import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import AdminOrder from './AdminOrder.js';

import * as http from '../../services';

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
            else {
                this.setState({ orders: [] });
                alert("YOU ARE NOT LOGGED IN");
                window.location.href = '/';
            }
        })
    }
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {this.state.orders.map(order => (
                        <Grid item key={order._id} xs={8} lg={5}>
                            <AdminOrder order={order} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        );
    }
}