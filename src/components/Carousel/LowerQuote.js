import React from 'react';
import './carousel.scss';
import slides from './slides';

function LowerQuote({ currentIndex }) {


    return (
        <div>
            {slides.map(({ quote, quoteName, quoteImage }, i) => i === currentIndex ? (
                <div className="quote-main-container">

                    <div
                        className="quote-image"
                        style={{ backgroundImage: `url(${quoteImage})` }}
                    />
                    <div className="lower-quote-container">
                        <div className="lower-quote">{quote}</div>
                        <div className="quote-name">{quoteName}</div>
                    </div>


                </div>

            ) : null)}
        </div>
    )
}

export default LowerQuote;