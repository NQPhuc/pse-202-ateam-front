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
import Login from './Component/Login';
import reactDom from 'react-dom';


const backendAddress = "http://localhost:3030";

function App() {
  const [value1, setValue1] = useState(false);
  let displayPopupFunction = displayPopupComponent.bind(this);
  
  return (
    <div className="App">    
      <HeaderComponent displayPopupCallback={displayPopupFunction}/>
      <Login displaying={value1}/>
      <Router>
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
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;

export function displayPopupComponent(type){
  console.log("HERE");
  if (type === 1){
    //reactDom.render(Login, document.getElementById("bodyDIV"));
    alert(this);
    this.setValue1(true);
  }
}