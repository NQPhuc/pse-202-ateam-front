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
import AddItem from './Component/AddItem.js';
import ItemView from './Page/itemsView.js';
import CartView from './Page/CartView.js';
//import PaymentPopup from "./Component/Payment/Payment";

//const backendAddress = "http://localhost:3030";

function App() {
  const [value1, setValue1] = useState(false);
  const [isRegisterPress, setRegisterPress] = useState(false);
  const [addItem, setAddItem] = useState(false);

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
        <Header loginPopUpDisplayingState_setter={setValue1} registerPopupDisplayingState_setter={setRegisterPress}/>
        <Login displaying={value1} loginPopUpDisplayingState_setter={setValue1} />
        <Register displaying={isRegisterPress} registerPopupDisplayingState_setter={setRegisterPress}/>       
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
              <AdminPage displayAddPopup={displayAddPopupHandler}/>
              <AddItem displaying={addItem} undisplayAddPopup={undisplayAddPopupHandler}/>
            </Route>
            <Route path="/cart">
              <CartView/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        <FooterComponent />
        {/*<PaymentPopup />*/}
      </Router>
    </div>
  );

}

export default App;

