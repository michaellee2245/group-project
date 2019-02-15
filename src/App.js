import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing';
import TopNavBar from './components/TopNavBar/TopNavBar';
import Inbox from '../src/components/Inbox/Inbox'
import InboxPosts from '../src/components/InboxPosts/InboxPosts'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ConnectedRouter history={ history }>
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />        
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter> */}

        {/* <Inbox/> */}
        <InboxPosts></InboxPosts>
       
        
      </div>

    );
  }
}

export default App;
