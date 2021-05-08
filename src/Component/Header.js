import React, { Component } from 'react';
import meowIMG from '../img/meowmeow.png';
import { Link, Router } from "react-router-dom";
export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="Pageheader">
                <img src={meowIMG} className="CatLogo" alt="logo" />
                <p className="HeaderText">Meow meow shop</p>
                <input className="SearchBar"></input>
                <button className="ButtonA">Register</button>
                {/* <Link to='/login'> */}
                <button className="ButtonA" onClick={() => this.props.displayPopupCallback(1)}>Login</button>
                {/* </Link> */}
                <button className="ButtonA">Mycart</button>
            </header>
        );
    }
}