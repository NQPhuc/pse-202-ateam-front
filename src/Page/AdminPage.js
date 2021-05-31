import React from 'react';
import './AdminPage.css';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import AdminProducts from '../Component/AdminProducts/AdminProducts.js';
import AdminOrderView from '../Component/AdminOrderView/AdminOrderView.js';

import * as http from '../services'; //import these to call API

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userRole: '',
            editPage: 'true',
            addItem: false,
        }
    }
    componentDidMount() {
        http.AuthenticateService.getNameAndRoleFromSession().then((value) => {
            if (value) {
                console.log(value);
                this.setState({ userName: value.Name, userRole: value.Role });
            }
            else {
                this.setState({ userName: "", userRole: "" });
            }
        })
    }
    render() {
        if (this.state.userName && this.state.userRole === "Admin") {
            return (
                <div>
                    <div className="admin-view" style={{ marginBottom: "20px" }}>
                        <div className="admin-option">
                            <Link to="/admin/order">
                                <Button
                                    style={{ marginRight: "20px" }}
                                    onClick={() =>
                                        this.setState({ editPage: 'false' })}
                                >
                                    Check orders
                                </Button>
                            </Link>
                            <Link to="/admin/edit">
                                <Button
                                    onClick={() =>
                                        this.setState({ editPage: 'true' })}
                                >
                                    Edit product
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {this.state.editPage === 'true' ? (
                        <div>
                            <AdminProducts />
                            <div className="under-body-admin" style={{ marginTop: "20px" }}>
                                <Button
                                    onClick={() => this.props.addPopUpDisplayingState_setter(true)}
                                >
                                    Add New Item
                                </Button>
                            </div>
                        </div >
                    ) : (
                        <AdminOrderView />
                    )}
                </div>
            )
        }
        else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: 50 }}>ERROR: 404 NOT FOUND</h1>
                    <Link to="/" onClick={() => { window.location.href = "/" }}>
                        <h3 style={{ fontSize: 25 }}>Return to Homepage</h3>
                    </Link>
                </div>
            );
        }
    }
}