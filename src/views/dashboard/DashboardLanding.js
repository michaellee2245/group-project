import React, { Component } from 'react'
import {connect} from 'react-redux'
import {login} from '../../redux/actions';
import {getSession} from '../../redux/actions'
import {logout} from  '../../redux/actions'


class DashboardLanding extends Component {

  test = () => {
    const user = {
      username: "Starburst",
      password: "8",
      
    }
    this.props.login(user)
  }
  test2 = () => {
    this.props.getSession()
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
        <button  onClick = {this.test}>Test</button>
        <button  onClick = {this.test2}>Test2</button>
        <button onClick = {this.test3}>Props</button>
        <button onClick = {this.test4}>Test4 </button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps,{login,getSession,logout})(DashboardLanding)