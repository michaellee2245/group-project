import React, { Component } from 'react';
import './market-modal.scss';


class MarketModal extends Component {
    render() {

        const { changeToggle, changeState, registerToggle } = this.props;

        return (
            <div className="modal-container fade-in">
                <div className="inner-modal-container fade-in">
                    <div
                        className="exit-modal"
                        onClick={changeToggle}> close
                    </div>
                    <div className="sign-in-container">
                        <div className="inputs-container">
                            <h1>Sign in.</h1>
                            <input
                                placeholder="Enter email address"
                                name="email"
                                onChange={(e) => changeState(e.target.name, e.target.value)}
                            />
                            <input
                                placeholder="password"
                                type="password"
                                name="password"
                                onChange={(e) => changeState(e.target.name, e.target.value)}
                            />
                        </div>
                        <div>
                            <span>Not a member?</span>
                            <span
                                className="register-button"
                                onClick={registerToggle} >Register now.
                            </span>
                        </div>
                    </div>
                    <div className="register-container">
                        <div className="register-inputs-container">
                            <h1>Register now.</h1>
                            <input
                                placeholder="Register Email Address"
                                name="registerEmail"
                                onChange={(e) => changeState(e.target.name, e.target.value)}
                            />
                            <input
                                placeholder="password"
                                type="password"
                                name="registerPassword"
                                onChange={(e) => changeState(e.target.name, e.target.value)} />
                            <div>
                                <span>Already a member?</span>
                                <span
                                    className="sign-in-button"
                                    onClick={registerToggle} >
                                    Sign in.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketModal;