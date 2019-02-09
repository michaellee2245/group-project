import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
<<<<<<< HEAD
import Inbox from '../src/components/Inbox/Inbox'
=======
import Marketing from './views/marketing/Marketing';
>>>>>>> 609b9bc6a66fed71b0f0c77f6dc1bbb4d041dc4a

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history = {history}>
          <Switch>
<<<<<<< HEAD
            <Route component = {DashboardLanding} />
            
           
=======

            <Route path="/dashboard" component = {DashboardLanding} />
            
            <Route component={Marketing} />

>>>>>>> 609b9bc6a66fed71b0f0c77f6dc1bbb4d041dc4a
          </Switch>
        </ConnectedRouter>

        <Inbox></Inbox>
      </div>
      
    );
  }
}

export default App;
