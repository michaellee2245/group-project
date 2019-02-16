import React from 'react';
import './carousel.scss';
import slides from './slides';

function LowerQuote({ currentIndex }) {


    return (
        <div>
            {slides.map(({ quote, quoteName }, i) => i === currentIndex ? (
                <div className="lower-quote-container">
                    <div>{quote}</div>
                    <div>{quoteName}</div>
                </div>
            ) : null)}
        </div>
    )
}

export default LowerQuote;