import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import $ from 'jquery';
import General from './components/General'
import Team from './components/Team'
import Stats from './components/Stats'
import history from '../../history'
import { AnimatedSwitch } from 'react-router-transition';

import './Admin.scss'

class Admin extends Component {
  state = {
    shownComponent: <General />
  }

  // componentDidMount = () => {
  //   const current = location.pathname;
  //   const items = [
  //     { name: 'General', logo: 'fas fa-cog' },
  //     { name: 'My-Team', logo: 'fas fa-users' },
  //     { name: 'Stats', logo: 'far fa-chart-bar' }
  //   ];



  // }

  handleClick = (name) => {
    this.props.history.push(`/dashboard/admin/${name}`)

    $('.admin-nav').removeClass('active')

    // if (window.location.pathname === '/dashboard/admin') {
    //   $('#General').addClass('active')
    // }

    if (window.location.pathname === `/dashboard/admin/${name}`) {
      $(`#${name}`).addClass('active')
    }

  }


  render() {
    const items = [
      { name: 'General', logo: 'fas fa-cog' },
      { name: 'My-Team', logo: 'fas fa-users' },
      { name: 'Stats', logo: 'far fa-chart-bar' }
    ];
    return (
      <div className="admin-main-container">
        <div className="admin-nav-container-left">
          <h1 className="admin-title">Admin</h1>

          <div className="admin-nav-list-container">
            <div className='admin-nav-wrapper'>
              {items.map(i => {
                return (
                  <div id={i.name} className="admin-nav" onClick={() => this.handleClick(i.name)}>
                    <i class={i.logo} />
                    <h2 >{i.name}</h2>
                  </div>
                )

              })}

            </div>
          </div>

        </div>
        {/* <div className='admin-content'> */}

          

            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route path='/dashboard/Admin/My-Team' render={(props) => <Team {...props} />} />
              <Route path='/dashboard/Admin/Stats' render={(props) => <Stats {...props} />} />
              <Route path='/dashboard/Admin/' render={(props) => <General {...props} />} />
            </AnimatedSwitch >

          

        {/* </div> */}
      </div>
    )
  }
}

export default Admin;
