import React, { Component } from 'react';
import './market-modal.scss';
import { Motion, spring, presets } from 'react-motion';


class MarketModal extends Component {

    state = {
        register: false,
        closeModal: false,
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
                handleLogin,
                handleRegister,
                display
            },
            state: {
                register
            },
            handleMouseDown
        } = this

        return (
            <Motion
                style={{
                    position: spring(register ? 1 : 0, presets.gentle),
                    modalOpacity: spring(display ? 1 : 0, presets.noWobble)

                }}

            >
                {({ position, modalOpacity }) => (

                    <div
                        className="modal-container"
                        style={{
                            opacity: modalOpacity,
                            display: modalOpacity === 0 ? 'none' : undefined
                        }}
                    >
                        <div
                            className="inner-modal-container"
                        >
                            <div
                                className="motion-container"
                                style={{
                                    transform: `translateX(${(50 - position * 100) / 2}%)`,

                                }}
                            >
                                <div
                                    className="sign-in-container"
                                    style={{
                                        opacity: 1 - position

                                    }}
                                >
                                    <div className="register-inputs-container">
                                        <h1>Sign in.</h1>
                                        <div className="inputs">
                                            <input
                                                placeholder="Enter username"
                                                name="username"
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
                                            <button
                                                onClick={handleLogin}
                                            >
                                                Submit
                                            </button>
                                            <div>
                                                <span>Not a member?</span>
                                                <span
                                                    className="register-button"
                                                    onClick={handleMouseDown} >
                                                    Register now.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="register-container fadeIn"
                                    style={{
                                        opacity: position
                                    }}
                                >
                                    <div className="register-inputs-container">
                                        <h1>Register now.</h1>
                                        <div>
                                            <input
                                                placeholder="Username"
                                                name="registerUsername"
                                                onChange={changeState}
                                            />
                                            <input
                                                placeholder="Email address"
                                                name="registerEmail"
                                                onChange={changeState}
                                            />
                                            <input
                                                placeholder="Create password"
                                                type="password"
                                                name="registerPassword"
                                                onChange={changeState}
                                            />
                                        </div>
                                        <div>
                                            <button
                                                onClick={handleRegister}
                                            >
                                                Submit
                                        </button>

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
                        <div
                            className="exit-modal"
                            onClick={changeToggle}> close
                        </div>
                    </div>
                )}
            </Motion>

        )
    }
}

export default MarketModal;