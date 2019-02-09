import React, { Component } from 'react';
import history from './history'
import DashSideNav from '../src/components/Dash-side-nav.js/DashSideNav'

import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Inbox from '../src/components/Inbox/Inbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history = {history}>
          <Switch>
            <Route component = {DashboardLanding} />
            
           
          </Switch>
        </ConnectedRouter>

        <Inbox></Inbox>
      </div>
      
    );
  }
}

export default App;
