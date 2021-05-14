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
import EditItem from './Component/EditItem.js';
import ItemView from './Page/itemsView.js';

//const backendAddress = "http://localhost:3030";

function App() {
  const [value1, setValue1] = useState(false);
  const [isRegisterPress, setRegisterPress] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const [itemViewPID, setitemViewPID] = useState(null);

  //let displayPopupFunction = displayPopupComponent.bind(this);
  const displayEditPopupHandler = (type) => {
      if (type === 1) {
          setEditItem(true);
      }
  }
  const undisplayEditPopupHandler = (type) => {
      if (type === 1) {
          setEditItem(false);
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
            <Route path="/item">
              <ItemView pid={itemViewPID}/>
            </Route>
            <Route path="/home">
              <HomePage setItemViewPID={setitemViewPID}/>
            </Route>
            <Route path="/admin">
              <AdminPage displayEditPopup={displayEditPopupHandler}/>
              <EditItem displaying={editItem} undisplayEditPopup={undisplayEditPopupHandler}/>
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

