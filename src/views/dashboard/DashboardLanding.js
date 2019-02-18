import React, { Component } from 'react'
import { connect } from 'react-redux'
import './DashboardLanding.scss'
import DashSideNav from '../../components/Dash-side-nav/DashSideNav'
import Inbox from '../../components/Inbox/Inbox'
import MyWeek from '../../components/MyWeek/MyWeek'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import Admin from '../../components/Admin/Admin'
import { dashboard } from '../../redux/actions'
import {Switch,Router,Route} from 'react-router-dom';
import history from '../../history'

class DashboardLanding extends Component {

  state = {
    shownComponent: <Admin page={this.props.history.push()} />,

  }

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

    // switch (name) {
    //   case 'Inbox': {
    //     return this.setState({ shownComponent: <Inbox /> })
    //   }
    //   case 'MyWeek': {
    //     return this.setState({ shownComponent: <MyWeek /> })
    //   }
    //   default:
    // }

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
          <TopNavBar />
        </div>
        <DashSideNav
          changeViews={this.changeViews}
          dashboard={this.props.dashboards}
        />

        <div className='dashboard-wrapper-inner'>
          {/* {this.state.shownComponent} */}
          <Switch >
            <Route path = '/dashboard/inbox' render = {(props) => <Inbox {...props} />} />
            <Route path = '/dashboard/myweek' render = {(props) => <MyWeek {...props} />} />
            <Route path = '/dashboard/Admin' render= {(props) => <Admin {...props} />} />
            
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