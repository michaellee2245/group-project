import React, { Component } from 'react';
import './mark-top-nav.scss';
import MarketModal from '../MarketModal/MarketModal';
import $ from 'jquery';

class MarketTopNav extends Component {

    state = {
        displayModal: false,
        username: '',
        password: ''

    }

    handleModalClick = () => {
        this.setState({
            displayModal: !this.state.displayModal
        })


        $('.exit-modal').on('click', function () {
            if ($('.modal-container').css('opacity') == 0) {
                $('.modal-container').css('opacity', 1);
            }
            else {
                $('.modal-container').css('opacity', 0);
            }
        });

    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() {

        console.log(this.state.username)
        console.log(this.state.password)

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


                    />
                ) : null}
            </div>
        )
    }
}

export default MarketTopNav;