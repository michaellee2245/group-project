import React from 'react';


function CarouselSlides({
    title,
    image,
    color
}){
        return(
            <div className="test-div" style={{borderColor: color}}>
                <h1>{title}</h1>
                <div>{image}</div>
            </div>
        )
}
export default CarouselSlides;

