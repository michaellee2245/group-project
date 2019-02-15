import React from 'react';



function CarouselSlides({
    title,
    image,
    color
}){
        return(
            <div className="test-div" style={{borderColor: color}}>
                <h3 style={{color:color}}>{title}</h3>
                <div 
                className="carousel-image" 
                style={{backgroundImage: `url(${image})`}}> 
                
                </div>
            </div>
        )
}
export default CarouselSlides;

