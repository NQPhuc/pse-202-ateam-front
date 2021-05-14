import React, { Component } from 'react';
import nikeLogo from '../img/nike_logo.png';
import styles from './Login.module.css';
import * as http from '../services'; //import these to call API

export default class LoginPopup extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
        this.state = { inputUserName: '', inputPassword: '' };
    }

    requestLogin = (usernameValue, passwordValue) => {
        http.AuthenticateService.login(usernameValue, passwordValue).then(
            (res) => {
                if(res){
                    window.location.href = '/'; //this look like a hack
                    this.props.undisplayLoginPopup(1)
                }
                else{
                    alert("Invalid username or password");
                }
            } 
        )
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.loginPopUpDisplayingState_setter(false)}>&times;</button>
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
                    <button className={styles.btn} onClick={() => this.requestLogin(this.state.inputUserName, this.state.inputPassword)}>Login</button>
                    </div>
                </div>
            );
        }
        return "";
    }
}

