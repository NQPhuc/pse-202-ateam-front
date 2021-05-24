import React from 'react';
import nikeLogo from '../img/nike_logo.png'
import styles from './ConfirmCart.module.css'

import * as http from '../services';

export default class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputProductName: '',
            inputSize: '',
            inputQuantity: '',
            inputPrice: '',
            inputColor: '',
            inputImage: '',
        }
    }

    makeOrder = (content, customer, recipent, address, contact) => {
        http.OrderService.createNewOder(content, customer, recipent, address, contact).then((value) => {
            
        })
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
                        <button
                            className={styles.btn}
                            onClick={() => alert("Ok nigger")}
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