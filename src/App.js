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
import AddItem from './Component/AddItem';
import OrderView from './Component/OrderView/OrderView';
import ConfirmCart from './Component/ConfirmCart';

function App() {
  const [value1, setValue1] = useState(false);
  const [isRegisterPress, setRegisterPress] = useState(false);
  const [addItem, setAddItem] = useState(false);
  const [confirmCart, setConfirmCart] = useState(false);
  const [totalItems,setTotalItems] = useState('');

  const componentDidMount = () => {
        http.AuthenticateService.getNameAndRoleFromSession().then((value) => {
            if (value) {
                this.setState({ totalItems: value.CartContent.length});
            }
        });
  }
  //let displayPopupFunction = displayPopupComponent.bind(this);
  const handlerTotalItems = (value) => {
    console.log(value);
    setTotalItems(value);
  }
  return (
    <div className="App">
      <Router>
        <Header
          totalItems={totalItems}
          loginPopUpDisplayingState_setter={setValue1}
          registerPopupDisplayingState_setter={setRegisterPress}
        />
        <Login displaying={value1} loginPopUpDisplayingState_setter={setValue1} />
        <Register displaying={isRegisterPress} registerPopupDisplayingState_setter={setRegisterPress} />
        <Switch>
          <Route path="/about">
            <p>
              <div>
                <p>Nothing</p>
              </div>
            </p>
          </Route>
          <Route exact path="/item/:pid" render={(props) => <ItemView {...props} />}>
          </Route>
          <Route path="/admin">
            <AdminPage addPopUpDisplayingState_setter={setAddItem} />
            <AddItem displaying={addItem} addPopUpDisplayingState_setter={setAddItem} />
          </Route>
          <Route path="/cart">
            <CartView confirmCartPopUpDisplayingState_setter={setConfirmCart} />
            <ConfirmCart displaying={confirmCart} confirmCartPopUpDisplayingState_setter={setConfirmCart} />
          </Route>
          <Route path="/order">
            <OrderView />
          </Route>
          <Route path="/">
            <HomePage totalItems={handlerTotalItems}/>
          </Route>
        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );

}

export default App;

