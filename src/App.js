import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        <GenericModelCRUD
          mappings={mappings} model={model} table={table}
        />
      </div>
    );
  }
}

export default App;
