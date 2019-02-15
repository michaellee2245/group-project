import React from 'react';
import './market-fact-card.scss';
import Slide from 'react-reveal/Slide';


export default function MarketFactCard(props) {
    console.log(props)

    const { text, percent, logo, quote, name, color } = props;

    return (
        <div className="fact-card-container">
            <Slide left>
                <div className={`fact-details-wrapper ${color}`}>
                    <span id="percentage"> {percent}% </span> <span id="fact-text"> {text} </span>
                </div>
            </Slide>
            <Slide right >
                <div className="fact-quote-wrapper" >
                    <div id="logo">
                        {logo}
                    </div>
                    <div className="quote-wrapper">
                        <p id="quote">
                            "{quote}"
                    </p>
                        <div id="quote-name">
                            {name}
                        </div>
                    </div>
                </div>

            </Slide>
        </div>
    )
}