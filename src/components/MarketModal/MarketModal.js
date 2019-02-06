import React, { Component } from 'react';
import './market-modal.scss';
import { Motion, spring, presets } from 'react-motion';


class MarketModal extends Component {

    state = {
        register: false
    }

    handleMouseDown = () => {
        this.setState({
            register: !this.state.register
        })
    }
    render() {



        const {
            props: {
                changeState,
                changeToggle,
                registerToggle
            },
            state: {
                register
            },
            handleMouseDown
        } = this

        return (
            <Motion
                style={{ opacity: spring(register ? 1 : 0, presets.gentle) }}

            >
                {({ opacity }) => (

                    <div className="modal-container fade-in">
                        <div
                            className="inner-modal-container fade-in"
                        >
                            <div
                                className="exit-modal"
                                onClick={changeToggle}> close
                            </div>
                            <div
                                className="motion-container"
                                style={{
                                    transform: `translateX(${(50 - opacity * 100) / 2}%)`,
    
                                }}
                                >
                                <div
                                    className="sign-in-container"
                                    style={{
                                        opacity: 1 - opacity

                                    }}
                                >
                                    <div className="inputs-container">
                                        <h1>Sign in.</h1>
                                        <input
                                            placeholder="Enter email address"
                                            name="email"
                                            onChange={changeState}
                                        />
                                        <input
                                            placeholder="Enter password"
                                            type="password"
                                            name="password"
                                            onChange={changeState}
                                        />
                                    </div>
                                    <div>
                                        <span>Not a member?</span>
                                        <span
                                            className="register-button"
                                            onClick={handleMouseDown} >
                                            Register now.
                                    </span>
                                    </div>
                                </div>
                                <div 
                                    className="register-container fadeIn"
                                    style={{
                                        opacity
                                    }}
                                    >
                                    <div className="register-inputs-container">
                                        <h1>Register now.</h1>
                                        <input
                                            placeholder="Register email address"
                                            name="registerEmail"
                                            onChange={changeState}
                                        />
                                        <input
                                            placeholder="Create password"
                                            type="password"
                                            name="registerPassword"
                                            onChange={changeState} />
                                        <div>
                                            <span>Already a member?</span>
                                            <span
                                                className="sign-in-button"
                                                onClick={handleMouseDown} >
                                                Sign in.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Motion>
        )
    }
}

export default MarketModal;