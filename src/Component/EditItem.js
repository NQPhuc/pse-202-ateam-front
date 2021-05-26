import React from 'react';
import nikeLogo from '../img/nike_logo.png';
import styles from './EditItem.module.css'

import * as http from '../services';

export default class EditItem extends React.Component {

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
    
    editProduct = (id, name, price, quantity, color, size, image) => {
        http.ProductService.editProduct(id, name, price, quantity, color, size, image).then((value) => {
            console.log(value);
            if (value) {
                console.log("UPDATE SUCCESS");
                this.props.editPopUpDisplayingState_setter(false);
                window.location.reload();
            }
            else {
                alert("UPDATE FAILED");
                console.log("FAILED");
            }
        }
        )
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.editPopUpDisplayingState_setter(false)}>&times;</button>
                    <img
                        src={nikeLogo}
                        alt="Meow"
                        className={styles.modal__logo}
                        id="logo"
                    />
                    <h2 className={styles.modal__header} >Ateam</h2>
                    <label style={{ fontSize: 14 }}>Product ID: {this.props.editId}</label>
                    <div className={styles.modal__form}>
                        <label>Product Name</label>
                        <input type="text" name="name" value={this.state.inputProductName} onChange={(e) => this.setState({ inputProductName: e.target.value })} />
                        <label>Size</label>
                        <input type="number" name="size" value={this.state.inputSize} onChange={(e) => this.setState({ inputSize: e.target.value })} />
                        <label>Quantity</label>
                        <input type="number" name="quantity" value={this.state.inputQuantity} onChange={(e) => this.setState({ inputQuantity: e.target.value })} />
                        <label>Price (in US)</label>
                        <input type="number" name="price" value={this.state.inputPrice} onChange={(e) => this.setState({ inputPrice: e.target.value })} />
                        <label>Color</label>
                        <input type="text" name="color" value={this.state.inputColor} onChange={(e) => this.setState({ inputColor: e.target.value })} />
                        <label>Image</label>
                        <input type="text" name="color" value={this.state.inputImage} onChange={(e) => this.setState({ inputImage: e.target.value })} />
                        <button
                            className={styles.btn}
                            onClick={() => {
                                this.editProduct(
                                    this.props.editId, this.state.inputProductName, this.state.inputPrice,
                                    this.state.inputQuantity, this.state.inputColor, this.state.inputSize,
                                    this.state.inputImage)
                            }
                            }
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            );
        }
        return "";
    }
}
