import React, { Component } from 'react'
import { connect } from 'react-redux'
import './DashboardLanding.scss'
import DashSideNav from '../../components/Dash-side-nav/DashSideNav'
import Inbox from '../../components/Inbox/Inbox'
import MyWeek from '../../components/MyWeek/MyWeek'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import Admin from '../../components/Admin/Admin'
import { dashboard } from '../../redux/actions'
import { Switch, Route, Redirect } from 'react-router-dom';
import DropMenu from '../../components/DropDown/DropMenu'
import Boards from '../../components/Boards/Boards';
import BoardsView from '../dashboard/BoardsView/BoardsView';
import MyProfile from '../../components/MyProfile/MyProfile'


class DashboardLanding extends Component {
  state = {
    count: ''
  }


  componentDidMount = () => {
    this.props.dashboard()
    .then( ( ) => {

      this.getCount()
    })
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

  getCount = () => {
    const numbers = this.props.dashboards.comments.filter(comment => {
      return !comment.read
  }).length
  this.setState({count:numbers})
}
  


  render() {
    return (

      <div className='dashboard-wrapper'>
        <div className='topNavBar'>

          <TopNavBar page={this.props.history.push} user = {this.props.user.user} />
        </div>
        <DashSideNav
          changeViews={this.changeViews}
          dashboard={this.props.dashboards}
          count = {this.state.count}
        />

        <div className='dashboard-wrapper-inner'>

          <Switch >
            <Route path='/dashboard/Inbox' render={(props) => <Inbox {...props} getCount = {this.getCount}/>} />
            <Route path='/dashboard/myweek' render={(props) => <MyWeek {...props} />} />
            <Route path= '/dashboard/boards' render = {(props) => <BoardsView {...props} board = {this.props.dashboards.boards ? this.props.dashboards.boards: []}/>} />
            <Route path='/dashboard/Admin' render={(props) => <Admin {...props} dashboard = {this.props.dashboard}/>} />
            <Route path='/dashboard/profile' render={(props) => <MyProfile {...props} user = {this.props.user.user} />} />
           
            <Route path='/dashboard/' render={(props) => <BoardsView {...props} />} />
            {/* <Route render={() => <Redirect to='/dashboard/boards'/>} /> */}
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
