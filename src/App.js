import React, { Component } from 'react';

import logo from './images/logoAllsponsored.png';
import './App.css';
import Loginscreen from './components/LoginScreen';
import LoginClub from './components/LoginClub';
import GenericModelCRUD from './components/GenericModelCRUD';

class App extends Component {
  render() {
    const mappings = [
      { name: "last_name", type: "text" },
      { name: "first_name", type: "text" },
      { name: "email", type: "text" },
      { name: "password", type: "password" },
    ];
    const model = {
      id: undefined,
      last_name: undefined,
      first_name: undefined,
      email: undefined,
      password: undefined
    };
    const table = "user";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    
        <LoginClub/>
        {/* <GenericModelCRUD
          mappings={mappings} model={model} table={table}
        /> */}
      </div>
    );
  }
}

export default App;
