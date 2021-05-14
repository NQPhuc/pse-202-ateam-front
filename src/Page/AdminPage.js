import React, {useState } from 'react';
import './AdminPage.css';
import AdminProducts from '../Component/AdminProducts/AdminProducts.js';
import { Link, Router } from "react-router-dom";
import { Button } from '@material-ui/core';
import EditItem from '../Component/EditItem.js';

const backendAddress = "http://localhost:3030";

class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="admin-view" style={{ marginBottom: "50px" }}>
                <div className="admin-option">
                    <Button style={{ marginRight: "20px" }}>Check order</Button>
                    <Button>Edit product</Button>
                </div>
                <AdminProducts />
                <div className="under-body" style={{ marginTop: "20px" }}>
                    <Button onClick={() => this.props.displayEditPopup(1)}>
                        Add New Item
                    </Button>
                </div>
            </div >
        );
    }
}

export default AdminPage;