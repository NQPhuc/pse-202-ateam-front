import React, {Component} from 'react';
import nikeLogo from '../img/nike_logo.png'
import styles from './Register.module.css'
import * as http from '../services'; //import these to call API

export default class RegisterPopup extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
        this.state = { 
            inputUserName: '', 
            inputPassword: '',
            inputFirstName: '',
            inputLastName: '',
            inputEmail:'',
            inputPhone:'',
        };
    }

    register = (usernameValue, passwordValue, firstname, lastname, email, phone) => {
        http.UserService.registerNewUser(usernameValue, passwordValue, firstname, lastname, email, phone).then(
            (res) => {
                if(res === "OK"){
                    window.location.href = '/'; //this look like a hack
                    this.props.registerPopupDisplayingState_setter(false)
                }
                else {
                    alert("Failed");
                }
            } 
        )
    }

    render() {
        if (this.props.displaying) {
            return (
                <div className={styles.modal}>
                    <button className={styles.btn__closeModal} onClick={() => this.props.registerPopupDisplayingState_setter(false)}>&times;</button>
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
                    <label>First Name</label>
                    <input type="text" name="firstName" value={this.state.inputFirstName} onChange={(event) => { this.setState({ inputFirstName: event.target.value }) }}/>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={this.state.inputLastName} onChange={(event) => { this.setState({ inputLastName: event.target.value }) }}/>
                    <label>Phone</label>
                    <input type="text" name="numberPhone" value={this.state.inputPhone} onChange={(event) => { this.setState({ inputPhone: event.target.value }) }}/>
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.inputEmail} onChange={(event) => { this.setState({ inputEmail: event.target.value }) }}/>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.inputPassword} onChange={(event) => { this.setState({ inputPassword: event.target.value }) }}/>
                    <label>Confirm Password</label>
                    <input type="password"/>
                    <button className={styles.btn} onClick={() => this.register(this.state.inputUserName, this.state.inputPassword,this.state.inputFirstName, this.state.inputLastName,this.state.inputEmail,this.state.inputPhone )}>Register</button>
                    </div>
                </div>
            );
        }
        return "";
    }
}
