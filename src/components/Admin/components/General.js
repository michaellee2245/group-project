import React, { Component } from 'react'
import './StatBox.scss'

class General extends Component {
  render() {
    return (
      <div  className = 'admin-general-wrapper'>
        <h1>Account Name</h1>
        <input />

        <h1>First day of the week</h1>
        <p>Change the first day of the week in the date picker when you update a date column in a Board.</p>
        <div>
          <input type='radio' /> Sunday
        <br />
          <input type='radio' /> Monday
        </div>
        
      </div>
    )
  }
}
export default General;