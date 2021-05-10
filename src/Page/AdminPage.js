import React from 'react';
import './AdminPage.css'
import { FaRegTrashAlt } from 'react-icons/fa';
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
                <div className="product-list">
                    <ul>
                        <li>
                            <a href="/product/1">
                                <img href="https://picsum.photos/seed/picsum/200" width="200" height="200" />
                            </a>
                            <h3>Item ID: 1</h3>
                            <h2>Nike Air Force 1</h2>
                            <p>Color: Silver</p>
                            <p>Size: 38</p>
                            <p>Stock: 1</p>
                            <button
                                className="delete-button"
                                style={{ border: "none" }}
                                onClick={() => this.deleteItem()}
                            >
                                <FaRegTrashAlt color="red" style={{ width: "25", height: "25" }} />
                            </button>
                            <p>Price: $300</p>
                            <button
                                className="edit-button"
                                style={{ border: "none", "font-size": "13px" }}
                                onClick={() => this.editItem()}
                            >
                                EDIT PRODUCT
                            </button>
                        </li>
                        {/* <li>
                            <a href="/product/2">
                                <img href="https://picsum.photos/seed/picsum/200" width="200" height="200" />
                            </a>
                            <h3>Item ID: 2</h3>
                            <h2>Adidas Hyperbola Pytago</h2>
                            <p>Color: Black</p>
                            <p>Size: 39</p>
                            <p>Stock: 5</p>
                            <button
                                className="delete-button"
                                style={{ border: "none" }}
                                onClick={() => this.deleteItem()}
                            >
                                <FaRegTrashAlt color="red" style={{ width: "25", height: "25" }} />
                            </button>
                            <p>Price: $499</p>
                            <button
                                className="edit-button"
                                style={{ border: "none", "font-size": "13px" }}
                                onClick={() => this.editItem()}
                            >
                                EDIT PRODUCT
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default AdminPage;