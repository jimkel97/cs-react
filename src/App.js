import React from "react";
import logo from "./logo.svg";

import "./App.css";
// import Button from 'react-bootstrap/Button'
// this just imports bootstrap button

import { Button, Alert } from "react-bootstrap";
// this imports all of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MyNav from "./MyNav";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
