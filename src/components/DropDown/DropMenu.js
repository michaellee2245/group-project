import React, { Component } from 'react'
import './DropMenu.scss'

class DropMenu extends Component {

  state = {
    hidden:true,
    nav: [{board:"one",number:1},{board:"two",number:2},{board:"three",number:3}]
  }

  handleClick = () => {
    this.setState({ hidden: !this.state.hidden})

  }



  render() {
    const subMenu = this.state.nav.map(i => {


      return (
        <li><span>{i.board}</span></li>
      )
    })
    return (
      <div className = 'drop-nav-wrapper'>
        <ul>
          <li><span onClick = {this.handleClick}> Testing</span>
          {this.state.hidden?(
            <ul  className = 'submenu'>
              {subMenu}
            </ul>

          ):(null)
          }
          </li>
          <li><span>test </span></li>
        </ul>
      </div>
    )
  }
}
export default DropMenu;