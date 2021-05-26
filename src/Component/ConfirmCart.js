import React from 'react';
import nikeLogo from '../img/nike_logo.png'
import styles from './ConfirmCart.module.css'

import * as http from '../services';

export default class ConfirmCart extends React.Component {

    constructor(props) {
        super(props);
        this.makeOrder = this.makeOrder.bind(this);
        this.state = {
            orderItem: [],
            inputCustomer: '',
            inputRecipent: '',
            inputAddress: '',
            inputContact: '',
            registered: false
        }
    }

    componentDidMount() {
        http.AuthenticateService.getNameAndRoleFromSession().then((value) => {
            if (value) {
                this.setState({ registered: true });
            }
            else {
                this.setState({ registered: false });
                alert("NOT LOGGED IN");
                window.location.href = "/";
            }
        })
    }


    makeOrder = (customer, recipent, address, contact) => {
        const sessionId = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (sessionId) {
            http.UserService.getUserCartContent().then((cart) => {
                if (cart) {
                    this.setState({ orderItem: cart.CartContent, registered: true }, () => {
                        const orderContent = {
                            itemList: this.state.orderItem,
                            ItemPrice: 0
                        };
                        if (!orderContent.itemList.length) {
                            alert("CART EMPTY, ORDER FAILED");
                            window.location.href = '/';
                            return;
                        }
                        http.OrderService.createNewOder(orderContent, customer, recipent, address, contact).then((value) => {
                            if (value) {
                                this.props.confirmCartPopUpDisplayingState_setter(false);
                                http.UserService.editCart([]).then((res) => {
                                    if (!res) {
                                        alert("DELETE FAILED");
                                    }
                                })
                                // orderContent.itemList.map(ele => {
                                //     ele['Quantity'] = 0
                                // })
                                // http.UserService.editCart(orderContent.itemList).then((res) => {
                                //     if (!res) {
                                //         alert("DELETE FAILED");
                                //     }
                                // })
                                window.location.reload();
                            }
                            else {
                                this.props.confirmCartPopUpDisplayingState_setter(false);
                                alert("ORDER FAILED");
                                window.location.href = '/';
                            }
                        })
                    })
                }
                else {
                    this.props.confirmCartPopUpDisplayingState_setter(false);
                    this.setState({ orderItem: [], registered: true });
                }
            })
        }
        else {
            alert("YOU ARE NOT LOGGED IN");
            this.props.confirmCartPopUpDisplayingState_setter(false);
            this.setState({ orderItem: [], registered: false });
            window.location.href = '/';
        }
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.confirmCartPopUpDisplayingState_setter(false)}>&times;</button>
                    <img
                        src={nikeLogo}
                        alt="Meow"
                        className={styles.modal__logo}
                        id="logo"
                    />
                    <h2 className={styles.modal__header} >Ateam</h2>
                    <div className={styles.modal__form}>
                        {!this.state.registered ?
                            <label>Customer Name</label>
                            :
                            ""
                        }
                        {!this.state.registered ?
                            <input type="text" name="customerName" value={this.state.inputCustomer} onChange={(e) => this.setState({ inputCustomer: e.target.value })} />
                            :
                            ""
                        }
                        <label>Recipent Name</label>
                        <input type="text" name="recipentName" value={this.state.inputRecipent} onChange={(e) => this.setState({ inputRecipent: e.target.value })} />
                        <label>Contact Number</label>
                        <input type="text" name="contact" value={this.state.inputContact} onChange={(e) => this.setState({ inputContact: e.target.value })} />
                        <label>Address</label>
                        <input type="text" name="address" value={this.state.inputAddress} onChange={(e) => this.setState({ inputAddress: e.target.value })} />
                        <button
                            className={styles.btn}
                            onClick={() => {
                                this.makeOrder
                                    (
                                        this.state.inputCustomer, this.state.inputRecipent,
                                        this.state.inputAddress, this.state.inputContact
                                    )
                            }}
                        >
                            Confirm
                        </button>
                    </div>
                </div >
            );
        }
        return "";
    }
}