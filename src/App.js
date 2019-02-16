import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing'
import WhyUs from './views/marketing/MarketWhyUs/MarketWhyUs';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />    
            <Route path="/why-us" component = {WhyUs} />    
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter>
      </div>

    );
  }
}

export default App;