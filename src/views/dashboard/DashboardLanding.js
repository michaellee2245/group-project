import React, { Component } from 'react'
import {connect} from 'react-redux'
import DashSideNav from '../../components/Dash-side-nav/DashSideNav'
import Inbox from '../../components/Inbox/Inbox'
import MyWeek from '../../components/MyWeek/MyWeek'

class DashboardLanding extends Component {

  state = {
    shownComponent: <Inbox />,
    
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
      
      <div>
        <DashSideNav changeViews = {this.changeViews} />
        {this.state.shownComponent}
      
        
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps,{})(DashboardLanding)