import React from 'react';
import './AdminPage.css';
import AdminProducts from '../Component/AdminProducts/AdminProducts.js';
import { Button } from '@material-ui/core';

import * as http from '../services'; //import these to call API

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userRole: '',
        }
    }
    componentDidMount() {
        const sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (sessionId) {
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
    }
    render() {
        if (this.state.userName && this.state.userRole === "Admin") {
            return (
                <div className="admin-view" style={{ marginBottom: "50px" }}>
                    <div className="admin-option">
                        <Button style={{ marginRight: "20px" }}>Check order</Button>
                        <Button>Edit product</Button>
                    </div>
                    <AdminProducts />
                    <div className="under-body-admin" style={{ marginTop: "20px" }}>
                        <Button onClick={() => this.props.displayAddPopup(1)}>
                            Add New Item
                        </Button>
                    </div>
                </div >
            );
        }
        else {
            return (
                <p>Sorry, no user allow</p>
            );
        }
    }
}

export default AdminPage;