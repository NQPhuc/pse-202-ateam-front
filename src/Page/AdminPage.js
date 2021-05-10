import React from 'react';
import './AdminPage.css'
import { FaRegTrashAlt } from 'react-icons/fa';
import data from '../testData/data.js'
class AdminPage extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteItem() {
        alert("bruh");
    }
    editItem() {
        alert("bruh");
    }
    render() {
        return (
            <div className="admin-view">
                <div className="upper-body">
                    <ul className="admin-option">
                        <li>
                            <button>Check order</button>
                        </li>
                        <li>
                            <button>Edit product</button>
                        </li>
                    </ul>
                </div>
                <div className="flex-container">
                    <ul>
                        <li>
                            <div className="product-info">
                                <a href="/product/1" className="product-image">
                                    <img src={data.products[0].image} width="150" height="150"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Item ID: {data.products[0].id}</h3>
                                    <h2>{data.products[0].name}</h2>
                                    <p>Color: {data.products[0].color}</p>
                                    <p>Size: {data.products[0].size}</p>
                                    <p>Stock: {data.products[0].stock}</p>
                                    <p style={{"font-weight": "bold"}}>{data.products[0].price}</p>
                                </div>
                            </div>
                            <div className="product-option">
                                <button
                                    className="delete-button"
                                    style={{ border: "none" }}
                                    onClick={() => this.deleteItem()}
                                >
                                    <FaRegTrashAlt color="red" style={{ width: "25", height: "25" }} />
                                </button>
                                <button
                                    className="edit-button"
                                    style={{ border: "none", "font-size": "13px" }}
                                    onClick={() => this.editItem()}
                                >
                                    EDIT PRODUCT
                            </button>
                            </div>
                        </li>
                        <li>
                            <div className="product-info">
                                <a href="/product/1" className="product-image">
                                    <img src={data.products[1].image} width="150" height="150"/>
                                </a>
                                <div className="product-detail">
                                    <h3>Item ID: {data.products[1].id}</h3>
                                    <h2>{data.products[1].name}</h2>
                                    <p>Color: {data.products[1].color}</p>
                                    <p>Size: {data.products[1].size}</p>
                                    <p>Stock: {data.products[1].stock}</p>
                                    <p style={{"font-weight": "bold"}}>{data.products[1].price}</p>
                                </div>
                            </div>
                            <div className="product-option">
                                <button
                                    className="delete-button"
                                    style={{ border: "none" }}
                                    onClick={() => this.deleteItem()}
                                >
                                    <FaRegTrashAlt color="red" style={{ width: "25", height: "25" }} />
                                </button>
                                <button
                                    className="edit-button"
                                    style={{ border: "none", "font-size": "13px" }}
                                    onClick={() => this.editItem()}
                                >
                                    EDIT PRODUCT
                            </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="under-body">
                    <a href="/additem">
                        <button
                            className="add-item-button"
                            style={{ border: "none", "font-size": "13px"}}
                        >
                            Add New Item
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

export default AdminPage;