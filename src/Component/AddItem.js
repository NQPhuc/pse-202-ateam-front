import React, { Component } from 'react';
import nikeLogo from '../img/nike_logo.png'
import styles from './AddItem.module.css'

export default class AddItem extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.undisplayAddPopup(1)}>&times;</button>
                    <img
                        src={nikeLogo}
                        alt="Meow"
                        className={styles.modal__logo}
                        id="logo"
                    />
                    <h2 className={styles.modal__header} >Ateam</h2>
                    <div className={styles.modal__form}>
                        <label>Product Name</label>
                        <input type="text" name="name" />
                        <label>Size</label>
                        <input type="text" name="size" />
                        <label>Quantity</label>
                        <input type="email" name="quantity" />
                        <label>Price (in US)</label>
                        <input type="price" />
                        <label>Color</label>
                        <input type="price" />
                        <button className={styles.btn}>Confirm</button>
                    </div>
                </div>
            );
        }
        return "";
    }
}
