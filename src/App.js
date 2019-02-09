import React, { Component } from 'react';
import history from './history'
import DashSideNav from '../src/components/Dash-side-nav/DashSideNav'

import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import MyWeek from './components/MyWeek/myWeek';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history = {history}>
          <Switch>
            {/* <Route component = {DashboardLanding} /> */}
           <Route component = {MyWeek} />
          </Switch>
        </ConnectedRouter>
      </div>
      
    );
  }
}

export default App;
