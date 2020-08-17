import React from "react";
import logo from "./logo.svg";

import "./App.css";
// import Button from 'react-bootstrap/Button'
// this just imports bootstrap button

import { Button, Alert } from "react-bootstrap";
// this imports all of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
