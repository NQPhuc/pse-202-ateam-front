import React, { useState, Component } from 'react';

export default class Login extends Component {
    setValueTempTextLogin = (newValue) => {
        /* WHY ARROW FUNCTION?
        Until arrow functions, every new function defined its own this value [...]. 
        This proved to be annoying with an object-oriented style of programming.

        Arrow functions capture the this value of the enclosing context [...]
        */

        this.setState({valueTempTextlogin: newValue});// this will trigger re-render
        //console.log(this); //this will be undefined if it's not an arrow function
    }

    constructor(props) {
        super(props);
        this.state = {valueTempTextlogin: ''};
        
    }
    
    render() {
        loadLogin(this.setValueTempTextLogin, this.props.backendAddress);
        return (
            <p>{this.state.valueTempTextlogin}</p>
        );
    }
}

function loadLogin(setter, backendAddress) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        setter(this.responseText);
      }
    };
    xhttp.open("GET", backendAddress + "/login", true);
    xhttp.send();
}
  