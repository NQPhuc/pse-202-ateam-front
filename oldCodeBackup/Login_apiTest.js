import React, { Component } from 'react';
import nikeLogo from '../img/nike_logo.png';
import styles from './Login.module.css';
import axios from 'axios';

export default class LoginPopup extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
        this.state = { inputUserName: '', inputPassword: '' };
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.undisplayLoginPopup(1)}>&times;</button>
                    <img
              src={nikeLogo}
              alt="Meow"
              className={styles.modal__logo}
              id="logo"
            />
                    <h2 className={styles.modal__header} >Ateam</h2>
                    <div className={styles.modal__form}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.inputUserName} onChange={(event) => { this.setState({ inputUserName: event.target.value }) }} />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.inputPassword} onChange={(event) => { this.setState({ inputPassword: event.target.value }) }}/>
                    <button className={styles.btn} onClick={() => loadLoginAxios(this.props.backendAddress, this.state.inputUserName, this.state.inputPassword)}>Login</button>
                    </div>
                </div>
                // <div className="popupOuter">
                //     <div className="loginPopup">
                //         <img src={nikeLogo} className="nikeLogo" alt="nikeLogo" />
                //         <br />
                //         <p className="phucLogo">ATEAM</p>

                //         <p className="loginFormLabel">Username</p>
                //         <input className="loginForm" name="username" value={this.state.inputUserName} onChange={(event) => { this.setState({ inputUserName: event.target.value }) }} />

                //         <p className="loginFormLabel">Password</p>
                //         <input className="loginForm" name="password" value={this.state.inputPassword} onChange={(event) => { this.setState({ inputPassword: event.target.value }) }} />
                //         <div>
                //             <button className="ButtonA" style={{ margin: "15px 0px 0px 0px", background: '#FFFFFF', borderRadius: '20px', width: '80%', height: '30px' }} onClick={() => loadLogin(this.props.backendAddress, this.state.inputUserName, this.state.inputPassword)}>Login</button>
                //         </div>
                //         <div>
                //             <button className="ButtonA" style={{ margin: "10px 0px 0px 0px", background: '#FFFFFF', borderRadius: '20px', width: '80%', height: '30px' }} onClick={() => this.props.undisplayPopupCallback(1)}>
                //                 Close
                //             </button>
                //         </div>
                //     </div>
                // </div>
            );
        }
        return "";
    }
}

function loadLogin(backendAddress, usernameValue, passwordValue) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(document.cookie);
            alert(this.responseText);
            return;
        }
    };
    xhttp.open("POST", backendAddress + "/auth", true);
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhttp.withCredentials = true;
    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");

    let params = JSON.stringify({ username: usernameValue, password: passwordValue });
    xhttp.send(params);
}

function loadLoginFetch(backendAddress, usernameValue, passwordValue){
    fetch(backendAddress + '/auth',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username: usernameValue, password: passwordValue }),
        credentials: 'include'
    }).then((res) => {
        if(res.ok){
           return res.text();  
        }
    }).then((data) => {
        console.log(document.cookie);
        alert(data);
    });
}

function loadLoginAxios(backendAddress, usernameValue, passwordValue){
    axios.post(backendAddress + '/auth', {username: usernameValue, password: passwordValue}, {withCredentials: true}).then(
        (res) => {
            console.log(res.data);
        } 
    )
}