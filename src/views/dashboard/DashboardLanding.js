import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { dashboard } from '../../redux/actions';

import TopNavBar from '../../components/TopNavBar/TopNavBar';
import DashSideNav from '../../components/Dash-side-nav/DashSideNav';

import Inbox from '../../components/Inbox/Inbox';
import MyWeek from '../../components/MyWeek/MyWeek';
import Admin from '../../components/Admin/Admin';
import MyProfile from '../../components/MyProfile/MyProfile';
import BoardsView from '../dashboard/BoardsView/BoardsView';

import './DashboardLanding.scss';

class DashboardLanding extends Component {

  componentDidMount = () => {
    this.props.dashboard()
  }

  test = () => {
    const user = {
      username: "Starburst",
      password: "8",
    }
    this.props.login(user)
  }

  changeViews = (e) => {
    const name = e.target.title
    this.props.history.push(`/dashboard/${name}`)
  }

  test3 = () => {
    console.log(this.props.user)
  }

  test4 = () => {
    this.props.logout()
  }

  render() {
    return (
      <div className='dashboard-wrapper'>
        <div className='topNavBar'>
          <TopNavBar page={this.props.history.push}  />
        </div>
        <DashSideNav
          changeViews={this.changeViews}
          dashboard={this.props.dashboards}
        />
        <div className='dashboard-wrapper-inner'>
          <Switch >
            <Route
              path='/dashboard/inbox'
              render={props => {
                return (
                  <Inbox
                    {...props}
                  />
              )}}
            />
            <Route
              path='/dashboard/myweek'
              render={props => {
                return (
                  <MyWeek
                    {...props}
                  />
                )}}
            />
            <Route
              path='/dashboard/Admin'
              render={props => {
                return (
                  <Admin
                    {...props}
                  />
                )}}
            />
            <Route
              path='/dashboard/Profile'
              render={props => {
                return (
                  <MyProfile
                    {...props}
                  />
                )
              }}
            />
            <Route
              path='/dashboard/boards'
              render={props => {
                return (
                  <BoardsView
                    {...props}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    dashboards: state.user.dashboard
  }
}

export default connect(mapStateToProps, { dashboard })(DashboardLanding)
