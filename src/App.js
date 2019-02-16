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
import InboxPosts from '../src/components/InboxPosts/InboxPosts'

=======
import Marketing from './views/marketing/Marketing'
import WhyUs from './views/marketing/MarketWhyUs/MarketWhyUs';
>>>>>>> ecd1ce2a86f82616035e6e2cb9ce9937a1692418

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        {/* <ConnectedRouter history={ history }>
=======
        <ConnectedRouter history={history}>
>>>>>>> ecd1ce2a86f82616035e6e2cb9ce9937a1692418
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />    
            <Route path="/why-us" component = {WhyUs} />    
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
