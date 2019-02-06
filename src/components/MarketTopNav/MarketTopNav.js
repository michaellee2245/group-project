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

        $(".modal-container").fadeOut();

    }

    handleRegisterClick = () => {
        
        
            $(".sign-in-container").toggle();
            $(".register-container").toggle();
          
    }

    handleChange = ({target: {value, name}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {

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