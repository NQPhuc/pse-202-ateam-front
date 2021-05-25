import React from 'react';
import './CartView.css';
import CartProducts from '../Component/CartProducts/CartProducts.js';
import { Button } from '@material-ui/core';

class CartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }
    }
    render() {
        return (
            <div className="cart-view" style={{ marginBottom: "50px" }}>
                <CartProducts />
                <div className="under-body-cart" style={{ marginTop: "20px" }}>
                    <Button onClick={() => this.props.confirmCartPopUpDisplayingState_setter(true)}>
                        Make Order
                    </Button>
                </div>
            </div >
        );
    }
}

export default CartView;