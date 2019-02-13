import React from 'react';
import './market-support-card.scss';
import { fileURLToPath } from 'url';

export default function SupportCard(props) {

    const {picture, title, description, className} = props;

    return(
        <div className="card-container">
            <div 
                className={`support-pic ${className}`}
                style={{
                    backgroundImage: `url(${picture})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                
                }}
            >
            </div>
            <h3>
                {title}
            </h3>
            {/* <p>
                {description}
            </p> */}
        </div>
    )
}