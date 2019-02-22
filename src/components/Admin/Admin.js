import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import General from './components/General'
import Team from './components/Team'
import Stats from './components/Stats'
import './Admin.scss'

class Admin extends Component {

  state = {
    shownComponent: <General />
  }

  handleClick = (name) => {
    this.props.history.push(`/dashboard/admin/${name}`)
  }

  render() {
    const items = [
      {name:'General',logo:'fas fa-cog'},
      {name:'My-Team',logo:'fas fa-users'},
      {name:'Stats',logo:'far fa-chart-bar'}
    ];
    return (
      <div>
        <h1>Admin</h1>
        {items.map((e,i) => {
          return(
            <div
              key={i}
              className="admin-nav"
              onClick={() => this.handleClick(e.name)}
            >
          <i className={e.logo} />
          <h2>{e.name}</h2>
        </div>
      )

    })}
      <div>
        <Switch >
          <Route path = '/dashboard/Admin/General' render={(props) => <General {...props}  />}/>
          <Route path = '/dashboard/Admin/My-Team' render = {(props) => <Team {...props}  /> }/>
          <Route path = '/dashboard/Admin/Stats' render = {(props) => <Stats {...props}/>} />
        </Switch >
      </div>
      </div>
    )
  }
}

export default Admin;
