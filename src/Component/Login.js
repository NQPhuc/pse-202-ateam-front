import React, { Component } from 'react';
import nikeLogo from '../img/nike_logo.png'

export default class LoginPopup extends Component {

    constructor(props) {
        super(props);
        //this.state = {displaying: false};
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
                        <input className="loginForm" name="username"></input>

                        <p className="loginFormLabel">Password</p>
                        <input className="loginForm" name="password"></input>
                        <div>
                            <button className="ButtonA" style={{ margin: "15px 0px 0px 0px", background: '#FFFFFF', borderRadius: '20px', width: '80%', height: '30px' }}>Login</button>
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