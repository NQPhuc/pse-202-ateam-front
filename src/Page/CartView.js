import React from 'react';
import './CartView.css';
import CartProducts from '../Component/CartProducts/CartProducts.js';
import { Button } from '@material-ui/core';

class CartView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="cart-view" style={{ marginBottom: "50px" }}>
                <CartProducts />
                <div className="under-body-cart" style={{ marginTop: "20px" }}>
                    {/* <Button onClick={() => this.props.displayCheckoutPopup(1)}> */}
                    <Button onClick={() => alert("not implemented")}>
                        Checkout
                    </Button>
                </div>
            </div >
        );
    }
}

export default CartView;