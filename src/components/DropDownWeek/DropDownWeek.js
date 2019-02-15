import React, { Component } from 'react'
import './DropDownWeek.scss'

export default class DropDownWeek extends Component {

 

  
  render() {
    const subMenu = this.props.nav.map(i => {
      return (
        <li><a href='#'>{i.task}</a></li>
      )
    })
    return (
      <div className = 'drop-nav-wrapper'>
            <ul  className = 'submenu'>
              {subMenu}
            </ul>
      </div>
    )
  }
}



