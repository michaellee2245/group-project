import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing'
import {connect} from 'react-redux'
import {getSession} from './redux/actions'

class App extends Component {
  componentDidMount = () => {
    this.props.getSession()
  }
  

  render() {
    return (
      <div className="App">
        <ConnectedRouter history={ history }>
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            <Route path="/dashboard" component = {DashboardLanding} />        
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter>
      </div>

    );
  }
}

export default connect(null,{getSession})(App);
