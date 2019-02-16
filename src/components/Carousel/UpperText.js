import React from 'react';
import './carousel.scss'
import slides from './slides';

function UpperText({ currentIndex }) {

    return (
        <div className="upper-text-container">
            <span><h1>A new way to manage your&nbsp;</h1></span>
            {slides.map(({ upperText, color }, i) => i === currentIndex ? (
                <span style={{ color }}><h1>{upperText}</h1></span>
            ) : null)}
        </div>
    );
}

export default UpperText;