import React, { Component } from 'react';
import './mark-top-nav.scss';
import MarketModal from '../MarketModal/MarketModal';
import $ from 'jquery';
import { connect } from 'react-redux'
import { login, register } from '../../redux/actions';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class MarketTopNav extends Component {

    state = {
        displayModal: false,
        username: '',
        password: '',
        registerEmail: '',
        registerPassword: '',
        registerUsername: '',
        open: false,

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

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    componentDidMount = () => {
        $(function () {
            var nav = $(".nav-container");
            $(window).scroll(function () {
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
                <Link className="nav-logo" to="/" />
                <div className="nav-right">
                    <div
                        id="nav-product"
                        className="menu"
                    >
                        Product
                    </div>
                    <Link
                        to="why-us"
                        id="nav-why"
                        className="menu"
                    >
                        Why Us
                    </Link>
                    <button
                        onClick={this.handleModalClick}
                        className="menu"
                    >
                        Log in
                    </button>
                    <div className="mobile-menu">
                        <HamburgerMenu
                            isOpen={this.state.open}
                            menuClicked={this.handleClick}
                        />
                    </div>
                    {this.state.open ? (
                        <div className="mobile-dropdown">
                            <div className="inner-dropdown">
                                <div
                                    id="nav-product"
                                    className="mobile-items"
                                >
                                    Product
                                </div>
                                <Link
                                    to="why-us"
                                    id="nav-why"
                                    className="mobile-items"
                                >
                                    Why Us
                                </Link>
                                <button
                                    onClick={this.handleModalClick}
                                    className="mobile-items"
                                    id="nav-login"
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    ) : null}

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