import React, { Component } from 'react';
import './market-footer.scss';

class MarketFooter extends Component {

    render(){
        return(
            <div className="footer-container">
                
                <div className="footer-logo"/>
                <div>
                    <ul>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MarketFooter;