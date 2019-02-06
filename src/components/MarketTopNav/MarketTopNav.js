import React, { Component } from 'react';
import './mark-top-nav.scss';
import MarketModal from '../MarketModal/MarketModal';
import $ from 'jquery';

class MarketTopNav extends Component {

    state = {
        displayModal: false,
        email: '',
        password: '',
        registerEmail: '',
        registerPassword: ''

    }

    handleModalClick = () => {
        this.setState({
            displayModal: !this.state.displayModal
        })

    }

    handleRegisterClick = () => {
        
        
            $(".sign-in-container").toggle();
            $(".register-container").toggle();
          
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {

        console.log(this.state.registerEmail)
        console.log(this.state.registerPassword)

        return (
            <div className="nav-container">
                <div className="nav-logo"></div>
                <div className="nav-right">
                    <div id="nav-product">Product</div>
                    <div id="nav-why">Why Us</div>
                    <button onClick={this.handleModalClick}>Log in</button>
                </div>
                {this.state.displayModal ? (
                    <MarketModal
                        changeToggle={this.handleModalClick}
                        changeState={this.handleChange}
                        registerToggle={this.handleRegisterClick}

                    />
                ) : null}
            </div>
        )
    }
}

export default MarketTopNav;