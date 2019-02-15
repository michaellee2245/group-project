import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
<<<<<<< HEAD
import Marketing from './views/marketing/Marketing';
import TopNavBar from './components/TopNavBar/TopNavBar';
import Inbox from '../src/components/Inbox/Inbox'

=======
import Marketing from './views/marketing/Marketing'
>>>>>>> de0ddc0cf89d078cebb670feb8c800e5ce902c9d

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/* <ConnectedRouter history = {history}>
=======
        <ConnectedRouter history={ history }>
>>>>>>> de0ddc0cf89d078cebb670feb8c800e5ce902c9d
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />        
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter> */}

        <Inbox></Inbox>
       
        
      </div>

    );
  }
}

export default App;
