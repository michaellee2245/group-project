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
                    
                        <div><a href="#"><i className="fab fa-pinterest-p"></i></a></div>
                        <div><a href="#"><i className="fab fa-twitter"></i></a></div>
                        <div><a href="#"><i className="fab fa-linkedin-in"></i></a></div>
                        <div><a href="#"><i className="fab fa-facebook-f"></i></a></div>
                        <div><a href="#"><i className="fab fa-youtube"></i></a></div>
                        <div><a href="#"><i className="fab fa-instagram"></i></a></div>
                    
                </div>
            </div>
        )
    }
}

export default MarketFooter;