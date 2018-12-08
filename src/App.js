import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Redirect } from 'react-router-dom';


import LoginClub from './components/LoginClub';
import GenericModelCRUD from './components/GenericModelCRUD';
import Espace from './components/espaceClub'
import AdminSponsored from './components/AdminSponsore'
import AdminSponsore from './components/AdminSponsore';


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
        <BrowserRouter>
              <div>
                <Switch>
                  <Route exact path="/" component={LoginClub} />
                  <Route path="/espaceclub" component={Espace} />
                  <Route path="/AdminSponsored" component={AdminSponsore} />
                </Switch>
              </div>
            </BrowserRouter>
        {/* <GenericModelCRUD
          mappings={mappings} model={model} table={table}
        /> */}
      </div>
    );
  }
}

export default App;
