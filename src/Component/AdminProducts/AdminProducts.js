import React from 'react'
import AdminProduct from './AdminProduct.js'
import { Grid } from '@material-ui/core'
import EditItem from '../EditItem.js';
import * as http from '../../services'; //import these to call API

export default class AdminProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            editItem: false,
            currentEditItem: '',
            currentDefaultValue: ''
        }
        this.inputHelper = this.inputHelper.bind(this);
    }
    componentDidMount() {
        http.ProductService.getAllProduct().then((value) => {
            if (value) {
                this.setState({ products: value });
            }
        })
    }
    inputHelper = (id) => {
        http.ProductService.getProduct(id).then(value => {
            if (value) {
                console.log(`FOUND ${id}`);
                this.setState({ currentDefaultValue: value }, () => { console.log(this.state.currentDefaultValue) });
            }
            else {
                console.log(`NOT FOUND ${id}`);
            }
        })
    }
    render() {
        return (
            <main>
                <Grid container justify="center" spacing={4}>
                    {this.state.products.map(product => (
                        <Grid item key={product._id} xs={8} lg={5}>
                            <AdminProduct
                                product={product}
                                editPopUpDisplayingState_setter={(e) => {
                                    this.setState({
                                        editItem: e,
                                        currentEditItem: product._id
                                    }, () => {
                                        this.inputHelper(this.state.currentEditItem);
                                    });
                                }}
                            />
                        </Grid>
                    ))}
                    <EditItem
                        displaying={this.state.editItem}
                        editId={this.state.currentEditItem}
                        default={this.state.currentDefaultValue}
                        editPopUpDisplayingState_setter={(e) => {
                            this.setState({
                                editItem: e,
                            }, () => {
                                console.log("CLOSE");
                            });
                        }}
                    />
                </Grid>
            </main>)
    }
};