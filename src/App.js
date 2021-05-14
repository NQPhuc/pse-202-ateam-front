import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Component/Header.js';
import FooterComponent from './Component/Footer/Footer.js';

import HomePage from './Page/HomePage.js';
import Login from './Component/Login';
import Register from './Component/Register';
import AdminPage from './Page/AdminPage.js';
import reactDom from 'react-dom';

import ItemView from './Page/itemsView.js';

//const backendAddress = "http://localhost:3030";

function App() {
  const [value1, setValue1] = useState(false);
  const [isRegisterPress, setRegisterPress] = useState(false);
  //let displayPopupFunction = displayPopupComponent.bind(this);
  const displayRegisterPopupHandler = (type) =>{
    if(type===1){
      setRegisterPress(true);
    }
  }
  const undisplayRegisterPopupHandler = (type) =>{
    if(type===1){
      setRegisterPress(false);
    }
  }

  const displayLoginPopUpHandler = (type) => {
    // console.log("HERE");
    if (type === 1) {
      setValue1(true);
    }
  }

  const undisplayLoginPopupHandler = (type) => {
    //console.log("HERE");
    if (type === 1) {
      setValue1(false);
    }
  }

  return (
    <div className="App">
      <Header displayLoginPopUp={displayLoginPopUpHandler} displayRegisterPopup={displayRegisterPopupHandler}/>
      <Login displaying={value1} undisplayLoginPopup={undisplayLoginPopupHandler} />
      <Register displaying={isRegisterPress} undisplayRegisterPopup={undisplayRegisterPopupHandler}/>
      <Router>
        <Switch>
          <Route path="/about">
            <p>
              <div>
                <p>Nothing</p>
              </div>
            </p>
          </Route>
          <Route path="/item">
            <ItemView />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/admin">
            <AdminPage/>
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

