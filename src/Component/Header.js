import React, { Component } from 'react';
import './Header.css'
import nikeLogo from '../img/nike_logo.png';
import HeaderCartButton from './Buttons/HeaderCartButton.js'
import { Link, Router } from "react-router-dom";
import HeaderButtons from './Buttons/HeaderButtons.js';
import { AiOutlineSearch } from 'react-icons/ai';

import * as http from '../services'; //import these to call API

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sid: '',
            userName: '',
            userRole: '',
            cart: [],
        };
    }

    componentDidMount() {
        this.state.sid = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (this.state.sid) {
            http.AuthenticateService.getNameAndRoleFromSession().then((value) => {
                if (value) {
                    this.setState({ userName: value.Name, userRole: value.Role, cart: value.CartContent });
                }
                else {
                    this.setState({ userName: "", userRole: "", cart: [] });
                }
            });
        }
    }

    requestLogout = () => {
        http.AuthenticateService.logout().then((value) => {
            window.location.href = '/';
            this.setState({ userName: "", userRole: "" });
        })
    }

    render() {
        const guestList = ([
            <li className="nav__item">
                <HeaderButtons onClick={() => this.props.loginPopUpDisplayingState_setter(true)}>Login</HeaderButtons>
            </li>,
            <li className="nav__item">
                <HeaderButtons onClick={() => this.props.registerPopupDisplayingState_setter(true)}>Register</HeaderButtons>
            </li>
        ])
        const adminAddition = (
            <li className="nav__item">
                <Link to="/admin/edit" style={{ textDecoration: 'none' }}>
                    <HeaderButtons>Manage</HeaderButtons>
                </Link>
            </li>
        );

        const userList = ([
            <p>Welcome {this.state.userName}</p>,
            <li className="nav__item">
                <HeaderButtons onClick={() => this.requestLogout()}>Logout</HeaderButtons>
            </li>
        ]);

        const userOrder = ([
            <li className="nav__item">
                <Link to="/order">
                    <HeaderButtons>Order</HeaderButtons>
                </Link>
            </li>
        ]);

        var middleSection = guestList;
        if (this.state.userName) {
            middleSection = userList;
            if (this.state.userRole === "Admin") {
                middleSection.push(adminAddition);
            }
            middleSection.push(userOrder);
        }

        return (
            <header className="header">
                <nav className="nav">
                    <Link to='/'>
                        <img
                            src={nikeLogo}
                            alt="Meow"
                            className="nav__logo"
                            id="logo"
                        />
                    </Link>
                    <div className="filter-section">
                        <label htmlFor="header-search">
                            <AiOutlineSearch className="search-icon" size={20} />
                        </label>
                        <input
                            type="text"
                            id="header-search"
                            placeholder="Search"
                            name="search"

                        />
                    </div>
                    <ul className="nav__links">
                        <Link to='/cart' style={{ textDecoration: 'none' }}>
                            <li className="nav__item">
                                <HeaderCartButton total={this.state.cart.length} />
                            </li>
                        </Link>
                        {middleSection}
                    </ul>
                </nav>
            </header>
        );
    }
}

