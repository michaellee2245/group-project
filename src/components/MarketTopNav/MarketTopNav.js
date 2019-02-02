import React, { Component } from 'react';
import './mark-top-nav.scss';

class MarketTopNav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className="nav-logo"></div>
                <div className="nav-right">
                    <div id="nav-product">Product</div>
                    <div id="nav-why">Why Us</div>
                    <button>Log in</button>
                </div>
            </div>
        )
    }
}

export default MarketTopNav;