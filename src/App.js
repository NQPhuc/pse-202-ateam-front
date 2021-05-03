import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HeaderComponent from './Component/Header.js';
import FooterComponent from './Component/Footer.js';

import HomePage from './Page/HomePage.js';



const backendAddress = "http://localhost:3030";

function App() {
  const [valueTempTextlogin, setValueTempTextLogin] = useState('0');

  return (
    <div className="App">
       
      <Router>
      <HeaderComponent />
        <Switch>
          <Route path="/about">
            <p>
              <div>
                  <p>Candidate: Nguyễn Quang Phúc</p>
                  <p>Github: <a href="https://github.com/NQPhuc/inf-calc-react">https://github.com/NQPhuc/inf-calc-react</a></p>
                  <p>Deployment website: <a href="https://react-inf-int-calculator.herokuapp.com/">https://react-inf-int-calculator.herokuapp.com/</a>
                  <br/>
              </p>
              </div>
            </p>
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            {loadLogin(setValueTempTextLogin)}
            <p>{valueTempTextlogin}</p>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

function loadLogin(setValue) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      setValue(this.responseText);
    }
  };
  xhttp.open("GET", backendAddress + "/login", true);
  xhttp.send();
}

export default App;
