import React, { Component } from 'react';
import './Header.css'
import nikeLogo from '../img/nike_logo.png';
import HeaderCartButton from './Buttons/HeaderCartButton.js'
import { Link, Router } from "react-router-dom";
import HeaderButtons from './Buttons/HeaderButtons.js';
export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="header">
            <nav className="nav">
            <img
              src={nikeLogo}
              alt="Meow"
              className="nav__logo"
              id="logo"
            />
            <ul className="nav__links">
              <li className="nav__item">
                <HeaderCartButton></HeaderCartButton>
              </li>
              <li className="nav__item">
                    {/* <Link to='/login'> */}
                <HeaderButtons onClick={() => this.props.displayPopupCallback(1)}>Login</HeaderButtons>
              </li>
              <li className="nav__item">
                <HeaderButtons>Register</HeaderButtons>
              </li>
            </ul>
          </nav>
          </header>
        );
    }
}