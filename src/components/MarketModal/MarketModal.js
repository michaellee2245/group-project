import React, { Component } from 'react';
import './market-modal.scss';
import $ from 'jquery';

class MarketModal extends Component {
    render() {

        const { changeToggle } = this.props;

        return (
            <div className="modal-container fade-in">
                <div className="inner-modal-container fade-in">
                    <div className="exit-modal" onClick={changeToggle}> close </div>
                    <div className="inputs-container">
                        <h1>Sign in.</h1>
                        <input placeholder="username or email" />
                        <input placeholder="password" type="password" />
                    </div>
                    <div>
                        <span>Not a member?</span>
                        <span className="register-button">Register now.</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketModal;