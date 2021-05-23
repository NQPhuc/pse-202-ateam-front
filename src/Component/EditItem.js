import React from 'react';
import nikeLogo from '../img/nike_logo.png';
import DateFnsUtils from '@date-io/date-fns';
import styles from './EditItem.module.css'
import { Switch, FormControlLabel } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import * as http from '../services';
class SwitchLabels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'false'
        };
        this.saleEnable = this.saleEnable.bind(this);
    }

    saleEnable = event => {
        this.setState({ checked: event.target.checked });
        const { saleToggle } = this.props;
        const { checked } = this.state;
        saleToggle(checked);
    };

    render() {
        return (
            <FormControlLabel
                control={
                    <Switch
                        checked={this.state.checked}
                        onChange={this.saleEnable}
                        value={this.state.checked}
                        color="primary"
                    />
                }
                labelPlacement="end"
                label={<label>On Sale?</label>}
            />
        );
    }
}

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
            inputStartTime: new Date(),
            inputEndTime: new Date(),
            inputSalePercent: '',
            saleSection: 'false'
        }
        this.saleToggle = this.saleToggle.bind(this);
    }

    saleToggle = e => {
        this.setState({ saleSection: e });
        console.log("On switch: ", e);
    }

    editProduct = (id, name, price, quantity, color, size, image) => {
        http.ProductService.editProduct(id, name, price, quantity, color, size, image).then((value) => {
            console.log(value);
            if (value) {
                alert("UPDATE SUCCESS");
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
                        <SwitchLabels saleToggle={this.saleToggle} />
                        {this.state.saleSection ?
                            (
                                <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
                                    <label>Percent</label>
                                    <input
                                        type="number"
                                        name="percent"
                                        value={this.state.inputSalePercent}
                                        style={{ width: "30%" }}
                                        onChange={(e) => {
                                            if (e.target.value <= 100 && e.target.value >= 0) {
                                                this.setState({ inputSalePercent: e.target.value })
                                            }
                                        }}
                                    />
                                    <label>Sale Date</label>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <DateTimePicker
                                            inputVariant="outlined"
                                            value={this.state.inputStartTime}
                                            maxDate={this.state.inputEndTime}
                                            onChange={(e) => {
                                                this.setState({ inputStartTime: e })
                                            }}
                                        />
                                        <DateTimePicker
                                            inputVariant="outlined"
                                            value={this.state.inputEndTime}
                                            minDate={this.state.inputStartTime}
                                            onChange={(e) => {
                                                this.setState({ inputEndTime: e })
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            )
                            :
                            ""
                        }
                        <button
                            className={styles.btn}
                            onClick={() => {
                                this.editProduct(
                                    this.props.editId, this.state.inputProductName, this.state.inputPrice,
                                    this.state.inputQuantity, this.state.inputColor, this.state.inputPrice,
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
