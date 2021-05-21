import React, {Component} from 'react';
import styles from './payment.module.css';

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

    onValueChange(event) {
        this.setState({
            payment_method: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(this.state.name)
        event.preventDefault();
        // this.props.toggle(false)
    }

    render() {
        return this.props.displaying ?
            <div className={styles.modal}>
                <button className={styles.btn__closeModal}
                        onClick={() => this.props.toggle(false)}>&times;</button>
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
                        <input type="text" name="Full Name"/>
                    </li>
                    <li>
                        <label><strong>Address</strong></label>
                        <input type="text" name="address"/>
                    </li>
                    <li>
                        <label><strong>Contact Number</strong></label>
                        <input type="text" name="phone"/>
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
                        alt="Momo"/>
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/logo.png"
                        alt="COD"/>
                    <img
                        src="https://d1wl5wkwpkr66u.cloudfront.net/VIETCOMBANK-LOGO.jpg"
                        alt="VietComBank"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div> : null;
    }
}

export default PaymentPopup;