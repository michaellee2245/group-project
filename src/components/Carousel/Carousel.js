import React, { Component } from 'react';
import './carousel.scss';
import { Motion, spring } from 'react-motion';
import Slider from 'react-slick';
import CarouselSlides from './CarouselSlides';

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
            // afterChange: this.props.handleChange,
            
        };
        const slides = [
            {
                upperText: "creative",
                color: "red",
                title: "Creative Processes",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "roadmap",
                color: "blue",
                title: "Roadmap Management",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "content",
                color: "yellow",
                title: "Content Calendar",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "HR",
                color: "purple",
                title: "HR Management",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "work",
                color: "green",
                title: "Project Management",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "team",
                color: "red",
                title: "Team Tasks",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "orders",
                color: "cyan",
                title: "Orders",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "sales",
                color: "orange",
                title: "Sales Pipeline",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "sprints",
                color: "blue",
                title: "Agile Sprints",
                image: "THIS IS AN IMAGE",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
        ];
        return (
            <Slider 
            {...settings}
            afterChange = {this.props.handleChange}
            >
                {slides.map(({ title, image, color }) => (
                <CarouselSlides
                    color= {color}
                    title={title}
                    image={image}
                />
            ))}
               

            </Slider>
        )
    }
}

export default Carousel;

