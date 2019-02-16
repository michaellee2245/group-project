import React, { Component } from 'react'
import {connect} from 'react-redux'
import './DashboardLanding.scss'
import DashSideNav from '../../components/Dash-side-nav/DashSideNav'
import Inbox from '../../components/Inbox/Inbox'
import MyWeek from '../../components/MyWeek/myWeek'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import Admin from '../../components/Admin/Admin'
import {dashboard} from '../../redux/actions'

class DashboardLanding extends Component {

  state = {
    shownComponent: <Admin />,
    
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

    switch (name){
      case 'Inbox': {
        return this.setState({ shownComponent: <Inbox /> })
      }
      case 'MyWeek': {
        return this.setState({ shownComponent: <MyWeek /> })
      }
      default: 
    }
    
  }

  test3 = () => {
    console.log(this.props.user)
    
  }
  test4 = () => {
    this.props.logout()
  }

  
  
  render() {
    return (
      
      <div className = 'dashboard-wrapper'>
        <div className = 'topNavBar'>
        <TopNavBar />
        </div>
        <DashSideNav changeViews = {this.changeViews} dashboard = {this.props.dashboards}/>

        <div className = 'dashboard-wrapper-inner'>
          {this.state.shownComponent}
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

export default connect(mapStateToProps,{dashboard})(DashboardLanding)