import React from 'react';
import './AdminPage.css';
import AdminProducts from '../Component/AdminProducts/AdminProducts.js';
import { Button } from '@material-ui/core';

class AdminPage extends React.Component {
    state = {
        inCheckOrder: 1
    }
    deleteItem() {
        alert("bruh");
    }
    editItem() {
        alert("bruh");
    }
    addNewItem() {

    }
    render() {
        return (
            <div className="admin-view">
                <div className="admin-option">
                    <Button>Check order</Button>
                    <Button>Edit product</Button>
                </div>
                <AdminProducts />
                <div className="under-body">
                    <a href="/add-item">
                        <Button>Add New Item</Button>
                    </a>
                </div>
            </div >
        );
    }
}

export default AdminPage;