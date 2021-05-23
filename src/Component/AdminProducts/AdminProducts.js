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
            editItem: 'false',
            currentEditItem: ''
        }
    }
    componentDidMount() {
        http.ProductService.getAllProduct().then((value) => {
            if (value) {
                console.log(value);
                this.setState({ products: value });
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
                                    });
                                }}
                            />
                        </Grid>
                    ))}
                    <EditItem
                        displaying={this.state.editItem}
                        editId={this.state.currentEditItem}
                        editPopUpDisplayingState_setter={(e) => {
                            this.setState({
                                editItem: e
                            });
                        }}
                    />
                </Grid>
            </main>)
    }
};