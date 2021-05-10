import React, { Component } from 'react';
import meowIMG from '../img/meowmeow.png';
import { Link, Router } from "react-router-dom";
<<<<<<< Updated upstream
=======
import HeaderButtons from './Buttons/HeaderButtons.js';
import { AiOutlineSearch } from 'react-icons/ai';
>>>>>>> Stashed changes
export default class Header extends Component {

  constructor(props) {
    super(props)
  }

<<<<<<< Updated upstream
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
=======
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <a href="/home">
            <img
              src={nikeLogo}
              alt="Meow"
              className="nav__logo"
              id="logo"
              onClick="/home"
            />
          </a>
          <div className="filter-section">
            <form action="/" method="get">
              <label htmlFor="header-search">
                <AiOutlineSearch className="search-icon" width="50" height="50" />
              </label>
              <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="search"
              />
              {/* <button type="submit">Search</button> */}
            </form>
          </div>
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
>>>>>>> Stashed changes
}