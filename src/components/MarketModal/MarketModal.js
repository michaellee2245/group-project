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
                        <input />
                        <input />
                    </div>
                </div>
            </div>
        )
    }
}

export default MarketModal;