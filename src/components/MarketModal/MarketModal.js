import React, { Component } from 'react';
import './market-modal.scss';
import $ from 'jquery';

class MarketModal extends Component {
    render() {

        const { changeToggle, changeState } = this.props;

        return (
            <div className="modal-container fade-in">
                <div className="inner-modal-container fade-in">
                    <div className="exit-modal" onClick={changeToggle}> close </div>
                    <div className="inputs-container">
                        <h1>Sign in.</h1>
                        <input placeholder="username or email" name="username" onChange={(e) => changeState(e.target.name, e.target.value)} />
                        <input placeholder="password" type="password" name="password" onChange={(e) => changeState(e.target.name, e.target.value)} />
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