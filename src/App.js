import React, { Component } from 'react';
import history from './history'
import './App.css';
import DashboardLanding from './views/dashboard/DashboardLanding';
import { ConnectedRouter } from 'connected-react-router';
import {Switch,Route} from 'react-router-dom';
import Marketing from './views/marketing/Marketing'
import {connect} from 'react-redux'
import {getSession} from './redux/actions'
import WhyUs from './views/marketing/MarketWhyUs/MarketWhyUs';
import Inbox from './components/Inbox/Inbox';


class App extends Component {
  componentDidMount = () => {
  
    this.props.getSession()
  }
  

  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route path = '/marketing' component = {Marketing} />
            {
              this.props.userExists && (
                <Switch> 
                  <Route path="/dashboard" component = {DashboardLanding} />    
                </Switch>
              )
            }
            
            <Route component={Marketing} />
          </Switch>
        </ConnectedRouter>
        <Inbox></Inbox>
      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    userExists: !!state.user.user
  }
}
export default connect(mapStateToProps,{getSession})(App);
