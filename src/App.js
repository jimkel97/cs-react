import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'react-bootstrap/Button'
// this just imports bootstrap button
import { Button, Alert } from 'react-bootstrap'
// this imports all of bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
      <Alert variant="danger">This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
