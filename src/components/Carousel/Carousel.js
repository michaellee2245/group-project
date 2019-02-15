import React, { Component } from 'react';
import './carousel.scss';
import { Motion, spring } from 'react-motion';
import Slider from 'react-slick';
import CarouselSlides from './CarouselSlides';
import slides from './slides'

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <i className="fas fa-long-arrow-alt-left" style={{color:"#000"}}></i>

        </div>
    );
}
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <i className="fas fa-long-arrow-alt-right" style={{color:"#000"}}></i>
        </div>
    )
}
class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            centerPadding: "10px",
            variableWidth: true,
            focusOnSelect: true,
            swipeToSlide: true,
            nextArrow: <CustomNextArrow />,
            prevArrow: <CustomPrevArrow />

        };

        return (
            <Slider
                {...settings}
                afterChange={this.props.handleChange}
            >
                {slides.map(({ title, image, color }) => (
                    <CarouselSlides
                        color={color}
                        title={title}
                        image={image}
                    />
                ))}


            </Slider>
        )
    }
}

export default Carousel;

