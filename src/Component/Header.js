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
        };
    }

    componentDidMount() {
        this.state.sid = document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        if (this.state.sid) {
            http.AuthenticateService.getNameAndRoleFromSession().then((value) => {
                if (value) {
                    //console.log(value);
                    this.setState({ userName: value.Name, userRole: value.Role });
                }
                else {
                    this.setState({ userName: "", userRole: "" });
                }
            });
        }
    }

    requestLogout = () => {
        http.AuthenticateService.logout().then((value) => {
            console.log(value);
            this.setState({ userName: "", userRole: "" });
        })
    }

    render() {
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
                        <li className="nav__item">
                            <HeaderCartButton></HeaderCartButton>
                        </li>

                        {!this.state.userName ? 
                        [
                        <li className="nav__item">
                            <HeaderButtons onClick={() => this.props.loginPopUpDisplayingState_setter(true)}>Login</HeaderButtons>
                        </li>,
                        <li className="nav__item">
                            <HeaderButtons onClick={() => this.props.registerPopupDisplayingState_setter(true)}>Register</HeaderButtons>
                        </li>
                        ]
                        :
                        [
                        <p>Welcome {this.state.userName}</p>,
                        <li className="nav__item">
                            <HeaderButtons onClick={() => this.requestLogout()}>Logout</HeaderButtons>
                        </li>
                        ]
                        }

                    </ul>
                </nav>
            </header>
        );
    }
}

