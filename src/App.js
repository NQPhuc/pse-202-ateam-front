import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Component/Header.js';
import FooterComponent from './Component/Footer/Footer.js';

import HomePage from './Page/HomePage.js';
import Login from './Component/Login';
import Register from './Component/Register';
import AdminPage from './Page/AdminPage.js';
import ItemView from './Page/itemsView.js';
import CartView from './Page/CartView.js';
import PaymentPopup from "./Component/Payment/Payment";
import * as http from './services';
//const backendAddress = "http://localhost:3030";
const Cart = [
  {id:1, created:"21/5/2021", totalItems: 3},
  {id:2, created:"21/5/2021", totalItems: 1}
]

function App() {
  const [value1, setValue1] = useState(false);
  const [isRegisterPress, setRegisterPress] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [seen, displayPopUp] = useState(false);


  //let displayPopupFunction = displayPopupComponent.bind(this);

  const displayAddPopupHandler = (type) => {
      if (type === 1) {
          setAddItem(true);
      }
  }
  const undisplayAddPopupHandler = (type) => {
      if (type === 1) {
          setAddItem(false);
      }
  }


  return (
    <div className="App">
      <Router>
        <Header 
                loginPopUpDisplayingState_setter={setValue1}
                registerPopupDisplayingState_setter={setRegisterPress}
                paymentPopUp_setter={displayPopUp}
        />
        <Login displaying={value1} loginPopUpDisplayingState_setter={setValue1} />
        <Register displaying={isRegisterPress} registerPopupDisplayingState_setter={setRegisterPress}/>
        <PaymentPopup displaying={seen} toggle={displayPopUp}/>
          <Switch>
            <Route path="/about">
              <p>
                <div>
                  <p>Nothing</p>
                </div>
              </p>
            </Route>
            <Route exact path="/item/:pid" render={(props) => <ItemView {...props}/>}>
            </Route>
            <Route path="/admin">
              {/* <AdminPage displayAddPopup={displayAddPopupHandler}/>
              <AddItem displaying={addItem} undisplayAddPopup={undisplayAddPopupHandler}/> */}
              <AdminPage addItemPopUpDisplayingState_setter={setAddItem}/>
            </Route>
            <Route path="/cart">
              <CartView/>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        <FooterComponent />
      </Router>
    </div>
  );

}

export default App;

