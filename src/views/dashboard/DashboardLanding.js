import React, { Component } from 'react'
import {connect} from 'react-redux'
import './DashboardLanding.scss'
import DashSideNav from '../../components/Dash-side-nav/DashSideNav'
import Inbox from '../../components/Inbox/Inbox'
import MyWeek from '../../components/MyWeek/myWeek'
import TopNavBar from '../../components/TopNavBar/TopNavBar'
import {dashboard} from '../../redux/actions'

class DashboardLanding extends Component {

  state = {
    shownComponent: <Inbox />,
    dashboard: ''
  }

  componentDidMount = () => {
    console.log('component did mount')
    console.log(this.props.user)
    this.props.dashboard(3)
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
    console.log(this.props);
    //this.setState({dashboard: this.props.dashboard.roster[0].name})

  }



  render() {
    return (

      <div className = 'dashboard-wrapper'>
        <div className = 'topNavBar'>

        <TopNavBar />
        </div>
        <DashSideNav changeViews = {this.changeViews}
        dashboard = {this.props.dashboard}/>
        {this.state.shownComponent}
        <button onClick={this.test4}>click me</button>
        <h1>{this.state.dashboard}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    dashboard: state.user.dashboard
  }
}

export default connect(mapStateToProps,{dashboard})(DashboardLanding)
