import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink, Redirect } from 'react-router-dom';


import LoginClub from './components/LoginClub';
import GenericModelCRUD from './components/GenericModelCRUD';
import ClubHome from './components/ClubHome';
import AdminSponsore from './components/AdminSponsore';
import LoginAdmin from './components/LoginAdmin';
import AdminHome from './components/AdminHome';
import AdminClub from './components/AdminClub'
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
                  <Route path="/admin" component={LoginAdmin} />
                  <Route path="/adminhome" component={AdminHome} />
                  <Route path="/clubhome" component={ClubHome} />
                  <Route path="/AdminSponsored" component={AdminSponsore} />
                  <Route path="/AdminClub" component={AdminClub} />
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
