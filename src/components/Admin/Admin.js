import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import General from './components/General'
import Team from './components/Team'
import Stats from './components/Stats'
import history from '../../history'
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
      { name: 'General', logo: 'fas fa-cog' },
      { name: 'My-Team', logo: 'fas fa-users' },
      { name: 'Stats', logo: 'far fa-chart-bar' }
    ];
    return (
      <div >
        <h1 className="admin-title">Admin</h1>
        <div className = 'admin-nav-wrapper'>
          {items.map(i => {
            return (
              <div className='admin-nav' onClick={() => this.handleClick(i.name)}>
                <i class={i.logo} />
                <h2 >{i.name}</h2>
              </div>
            )

          })}

        </div>
        <div className='admin-content'>


          <Switch >
            <Route path='/dashboard/Admin/My-Team' render={(props) => <Team {...props} />} />
            <Route path='/dashboard/Admin/Stats' render={(props) => <Stats {...props} />} />
            <Route path='/dashboard/Admin/' render={(props) => <General {...props} />} />
          </Switch >
        </div>
      </div>
    )
  }
}

export default Admin;
