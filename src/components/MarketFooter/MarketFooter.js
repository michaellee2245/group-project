import React, { Component } from 'react';
import './market-footer.scss';

class MarketFooter extends Component {

    render(){
        return(
            <div className="footer-container">

                <div className="footer-logo"/>
                <div className="footer-info">

                        <div>All Rights Reserved</div>
                        <div>&copy; moonday.com</div>
                        <div>+1 888.568.9898</div>

                </div>
                <div className="social-icons">

                        <div><span><i className="fab fa-pinterest-p"></i></span></div>
                        <div><span><i className="fab fa-twitter"></i></span></div>
                        <div><span><i className="fab fa-linkedin-in"></i></span></div>
                        <div><span><i className="fab fa-facebook-f"></i></span></div>
                        <div><span><i className="fab fa-youtube"></i></span></div>
                        <div><span><i className="fab fa-instagram"></i></span></div>

                </div>
            </div>
        )
    }
}

export default MarketFooter;