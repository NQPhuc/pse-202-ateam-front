import React, { Component } from 'react';
import styles from './payment.module.css';

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
        const paymentInfo = '';
        paymentInfo = paymentInfo.concat(
            "NAME: ", name,
            "ADDRESS: ", address,
            "PHONE: ", phone,
            "METHOD: ", method
        )
        http.OrderService.setOrderPaymentInfo(this.props.orderId, paymentInfo).then((value) => {
            if (value) {
                console.log("PAYMENT SUCCESS");
                this.props.handleClosePayment();
                window.location.reload();
            }
            else {
                alert("CANNOT EXECUTE");
                window.location.reload();
            }
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
                <form>
                    <li>
                        <label><strong> Full Name:</strong> </label>
                        <input type="text" name="Full Name" onChange={(e) => this.setState({ name: e.target.value })} />
                    </li>
                    <li>
                        <label><strong>Address</strong></label>
                        <input type="text" name="address" onChange={(e) => this.setState({ address: e.target.value })} />
                    </li>
                    <li>
                        <label><strong>Contact Number</strong></label>
                        <input type="text" name="phone" onChange={(e) => this.setState({ phone_number: e.target.value })} />
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
                    <input type="submit" value="Submit" onClick={this.handleSubmit
                        (
                            this.state.name, this.state.address,
                            this.state.phone_number, this.state.payment_method
                        )} />
                </form>
            </div> : null;
    }
}

export default PaymentPopup;