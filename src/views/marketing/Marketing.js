import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import WhyUs from '../marketing/MarketWhyUs/MarketWhyUs'
import MarketingLanding from './MarketingLanding/MarketingLanding';
import MarketTopNav from '../../components/MarketTopNav/MarketTopNav';
import MarketFooter from '../../components/MarketFooter/MarketFooter';


class Marketing extends Component {
    state = {
        displayModal: false,
        
    }

    handleClick = () => {
        this.setState({
            displayModal: !this.state.displayModal
        })
    }
    


    render(){
        return(
            <div>
                <MarketTopNav display = {this.state.displayModal} toggle = {this.handleClick} />
                <Switch>
                    <Route path = '/why-us' render = {(props) => <WhyUs {...props} toggle = {this.handleClick}/> } />
                    <Route path = '/' render = {(props) => <MarketingLanding {...props} toggle = {this.handleClick}/>}/>
                </Switch>
                
                
                <MarketFooter />

            </div>
        )
    }
}
export default Marketing;