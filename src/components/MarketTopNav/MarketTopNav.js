import React, { Component } from 'react';
import './mark-top-nav.scss';
import MarketModal from '../MarketModal/MarketModal';
import $ from 'jquery';
import { connect } from 'react-redux'
import { login, register } from '../../redux/actions'

class MarketTopNav extends Component {

    state = {
        displayModal: false,
        username: '',
        password: '',
        registerEmail: '',
        registerPassword: '',
        registerUsername: ''

    }

    handleModalClick = () => {

        this.setState({
            displayModal: !this.state.displayModal
        })


    }

    handleChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value
        })
    }

    handleClickLogin = () => {

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.login(user)

    }

    handleClickRegister = () => {

        const user = {
            username: this.state.registerUsername,
            password: this.state.registerPassword,
            email: this.state.registerEmail
        }

        this.props.register(user)

    }

    componentDidMount = () => {
        $(function() {
            var nav = $(".nav-container");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 10) {
                    nav.removeClass('nav-container').addClass("fixed-nav");
                } else {
                    nav.removeClass("fixed-nav").addClass('nav-container');
                }
            });
        });
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

                <MarketModal
                    changeToggle={this.handleModalClick}
                    changeState={this.handleChange}
                    handleLogin={this.handleClickLogin}
                    handleRegister={this.handleClickRegister}
                    display={this.state.displayModal}

                />

            </div>
        )
    }
}


export default connect(null, { login, register })(MarketTopNav);