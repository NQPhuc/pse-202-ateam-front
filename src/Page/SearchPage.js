import React from 'react';
import * as http from '../services';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Icon, CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchProduct: []
        }
    }
    showSearchResult = (name) => {
        http.ProductService.searchProduct(name).then(value => {
            if (value.length) {
                this.setState({ matchProduct: value }, () => {
                    console.log("FOUND PRODUCTS");
                })
            }
            else {
                this.setState({ matchProduct: [] }, () => {
                    console.log("CAN'T FIND ANY");
                });
            }
        })
    }
    componentDidMount() {
        const pname = this.props.match.params.pname;
        console.log("THE ONE YOU ARE SEARCHING: ", pname);
        if (pname) {
            this.showSearchResult(pname);
            console.log("SEARCH COMPLETE");
        }
        else {
            console.log("NONE WAS PASSED");
        }
    }

    addToCart = (id) => {
        console.log("ITEM ID: ", id);
        http.UserService.addSingleItemToCart(id).then(value => {
            console.log(value);
            if (value === "OK") {
                console.log("ADDED");
            }
            else if (value === "Invalid session") {
                alert("YOU ARE NOT LOGGED IN");
                window.location.href = '/';
            }
            else {
                alert("ERROR: PRODUCT NOT FOUND");
            }
        })
    }

    render() {
        if (this.state.matchProduct.length) {
            return (
                <Grid container justify="center" spacing={4}>
                    {
                        this.state.matchProduct.map((item) => (
                            <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                                <Card>
                                    <CardMedia />
                                    <CardContent>
                                        <div className="item-block">
                                            <div className="item-info">
                                                <Typography
                                                    variant="body1"
                                                    style={{ "paddingRight": "10px", "fontWeight": "lighter" }}>
                                                    {item._id}
                                                </Typography>
                                                <Link to={"/item/" + item._id} className="item-image">
                                                    <img src={"../../img/" + item.image} width="150" height="150" />
                                                </Link>
                                                <div className="item-detail">
                                                    <Typography variant="h4">{item.Name}</Typography>
                                                    <Typography variant="body1">Color: {item.Color}</Typography>
                                                    <Typography variant="body1">Size: {item.Size}</Typography>
                                                    <Typography variant="body1">Stock: {item.Quantity}</Typography>
                                                    <Typography variant="h6" style={{ "font-weight": "bold" }}>$ {item.Price}</Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="Add to cart" onClick={() => this.addToCart(item._id)}>
                                            <AddShoppingCart style={{ fontSize: "23" }} />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            );
        }
        else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: 50 }}>NO RESULT</h1>
                    <Link to="/" onClick={() => { window.location.href = "/" }}>
                        <h3 style={{ fontSize: 25 }}>Return to Homepage</h3>
                    </Link>
                </div>
            )
        }
    }
}