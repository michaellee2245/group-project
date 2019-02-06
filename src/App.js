import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history = {history}>
          <Switch>
            <Route component = {DashboardLanding} />

          </Switch>
        </ConnectedRouter>


      </div>
    );
  }
}

export default App;
