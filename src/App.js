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
import AdminPage from './Page/AdminPage.js';
import reactDom from 'react-dom';

import ItemView from './Page/itemsView.js';

const backendAddress = "http://localhost:3030";

function App() {
  const [value1, setValue1] = useState(false);
  //let displayPopupFunction = displayPopupComponent.bind(this);

  const displayPopupComponent = (type) => {
    //console.log("HERE");
    if (type === 1) {
      setValue1(true);
    }
  }

  const undisplayPopupComponent = (type) => {
    //console.log("HERE");
    if (type === 1) {
      setValue1(false);
    }
  }

  return (
    <div className="App">
      <Header displayPopupCallback={displayPopupComponent} />
      <Login displaying={value1} undisplayPopupCallback={undisplayPopupComponent} backendAddress={backendAddress} />
      <Router>
        <Switch>
          <Route path="/about">
            <p>
              <div>
                <p>Candidate: Nguyễn Quang Phúc</p>
                <p>Github: <a href="https://github.com/NQPhuc/inf-calc-react">https://github.com/NQPhuc/inf-calc-react</a></p>
                <p>Deployment website: <a href="https://react-inf-int-calculator.herokuapp.com/">https://react-inf-int-calculator.herokuapp.com/</a></p>
                <br />
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

