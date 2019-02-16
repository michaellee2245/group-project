import React, { Component } from 'react';
import General from './components/General'
import './Admin.scss'

class Admin extends Component {

 
  render() {
    const items = [
      {name:'General',logo:'fas fa-cog'},
      {name:'My Team',logo:'fas fa-users'},
      {name:'Stats',logo:'far fa-chart-bar'}
    ];
    return (
      <div>
        <h1>Admin</h1>
        {items.map(i => {
      return(
        <div className = 'admin-nav'>
          <i class = {i.logo} />
          <h2>{i.name}</h2>
        </div>
      )
      
    })}
      <div>
        <General />
      </div>
      </div>
    )
  }
}

export default Admin;
