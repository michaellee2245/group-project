import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
import Marketing from './views/marketing/Marketing';
import MarketWhyUs from './views/marketing/MarketWhyUs/MarketWhyUs.js';
=======
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing'
>>>>>>> de0ddc0cf89d078cebb670feb8c800e5ce902c9d

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
<<<<<<< HEAD

            <Route path="/dashboard" component={DashboardLanding} />
            <Route path="/why-us" component={MarketWhyUs} />
            <Route component={Marketing} />


=======
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />        
            <Route component={Marketing} />
>>>>>>> de0ddc0cf89d078cebb670feb8c800e5ce902c9d
          </Switch>
        </ConnectedRouter>
      </div>

    );
  }
}

export default App;
