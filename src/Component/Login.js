import React, { Component } from 'react';
import nikeLogo from '../img/nike_logo.png'

export default class LoginPopup extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
        this.state = {inputUserName: '', inputPassword: ''};
    }

    render() {
        if(this.props.displaying){
            return (
                <div className="popupOuter">
                    <div className="loginPopup">
                        <img src={nikeLogo} className="nikeLogo" alt="nikeLogo" />
                        <br />
                        <p className="phucLogo">ATEAM</p>

                        <p className="loginFormLabel">Username</p>
                        <input className="loginForm" name="username" value={this.state.inputUserName} onChange={(event) => {this.setState({inputUserName: event.target.value})}}/>

                        <p className="loginFormLabel">Password</p>
                        <input className="loginForm" name="password" value={this.state.inputPassword} onChange={(event) => {this.setState({inputPassword: event.target.value})}}/>
                        <div>
                            <button className="ButtonA" style={{ margin: "15px 0px 0px 0px", background: '#FFFFFF', borderRadius: '20px', width: '80%', height: '30px'}} onClick={() => loadLogin(this.props.backendAddress, this.state.inputUserName, this.state.inputPassword)}>Login</button>
                        </div>
                        <div>
                            <button className="ButtonA" style={{ margin: "10px 0px 0px 0px", background: '#FFFFFF', borderRadius: '20px', width: '80%', height: '30px' }} onClick={() => this.props.undisplayPopupCallback(1)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>

            );
        }
        return "";
    }
}

function loadLogin(backendAddress, usernameValue, passwordValue) {
    console.log(usernameValue + passwordValue);
    console.log(backendAddress);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);  
        //setter(this.responseText);
        return;
      }
    };
    xhttp.open("POST", backendAddress + "/login", true);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    let params = JSON.stringify({ username: usernameValue, password: passwordValue});
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //xhttp.setRequestHeader("Content-length", params.length);
    //xhttp.setRequestHeader("Connection", "close");
    
    xhttp.send(params);
}