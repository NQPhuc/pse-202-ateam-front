import React, { Component } from 'react';
import styles from './payment.module.css';
import { Button } from '@material-ui/core';
import * as http from '../../services';

class PaymentPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone_number: '',
            payment_method: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(e) {
        this.setState({
            payment_method: e.target.value
        })
    }

    handleSubmit = (name, address, phone, method) => {
        var paymentInfo = '';
        paymentInfo = paymentInfo.concat(
            name ? `${name}/` : '',
            address ? `${address}/` : '',
            phone ? `${phone}/` : '',
            method ? `${method} ` : '',
        )
        console.log(paymentInfo);
        http.OrderService.setOrderPaymentInfo(this.props.orderId, paymentInfo).then((value) => {
            const { handleClosePayment } = this.props;
            if (value === "OK") {
                console.log("PAYMENT SUCCESS");
            }
            else if (value === "Invalid session") {
                alert("PLEASE LOGIN");
                window.location.href = "/";
            }
            else if (value === "Payment failed") {
                alert("PAYMENT FAILED");
            }
            else {
                alert(`ERROR: ${value}`);
            }
            handleClosePayment();
            window.location.reload();
        })
    }



    render() {
        return this.props.displaying ?
            <div className={styles.modal}>
                <button className={styles.btn__closeModal}
                    onClick={this.props.handleClosePayment}>&times;</button>
                <div className={styles.modal__header}>
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/nike_logo.png"
                        alt="logo Meo Meo Shop"
                    />
                    <h2>A Team</h2>
                </div>
                <div>
                    <li>
                        <label><strong> Full Name:</strong> </label>
                        <input type="text" name="Full Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </li>
                    <li>
                        <label><strong>Address</strong></label>
                        <input type="text" name="address" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                    </li>
                    <li>
                        <label><strong>Contact Number</strong></label>
                        <input type="text" name="phone" value={this.state.phone_number} onChange={(e) => this.setState({ phone_number: e.target.value })} />
                    </li>
                    <h2> Payment Method</h2>
                    <div className={styles.payment_methods}>
                        <input type="radio" name="payment_method" value="MoMo" />
                        <input type="radio" name="payment_method" value="COD" />
                        <input type="radio" name="payment_method" value="VietComBank" />
                    </div>
                    <div className={styles.payment_methods}>
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/logo-momo.png"
                            alt="Momo" />
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/logo.png"
                            alt="COD" />
                        <img
                            src="https://d1wl5wkwpkr66u.cloudfront.net/VIETCOMBANK-LOGO.jpg"
                            alt="VietComBank" />
                    </div>
                    <input type="button" value="SUBMIT" style={{ cursor: "pointer" }} onClick={() => this.handleSubmit
                        (
                            this.state.name, this.state.address,
                            this.state.phone_number, this.state.payment_method
                        )} />
                </div>
            </div> : null;
    }
}

export default PaymentPopup;