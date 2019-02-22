import React, {Component} from 'react';
import './DropMenu.scss'




class DropDown extends Component {
    
   
    
      handleClick = () => {
        this.setState({ hidden: !this.state.hidden})
      
      }
    
    
    
      render() {
        const subMenu = this.props.nav.map(i => {
          
        
          return (
            <li className = 'drop-down-nav' ><a href='#' className = 'board-name'>{i.name}</a></li>
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


export default DropDown