import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";
// import Button from 'react-bootstrap/Button'
// this just imports bootstrap button

import { Button, Alert } from "react-bootstrap";
// this imports all of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./Menu";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
      <Alert variant="danger">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selected">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
