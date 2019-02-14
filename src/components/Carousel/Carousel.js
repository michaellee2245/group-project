import React, { Component } from 'react';
import './carousel.scss';
import { Motion, spring } from 'react-motion';
import Slider from 'react-slick';
import CarouselSlides from './CarouselSlides';

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
        const slides = [
            {
                upperText: "creative",
                color: "red",
                title: "Creative Processes",
                image: "https://images.unsplash.com/photo-1549272271-854034bb5db8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "roadmap",
                color: "blue",
                title: "Roadmap Management",
                image: "https://images.unsplash.com/photo-1549392529-c4cc188a4141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "content",
                color: "yellow",
                title: "Content Calendar",
                image: "https://images.unsplash.com/photo-1549721609-8dc23c55d1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "HR",
                color: "purple",
                title: "HR Management",
                image: "https://images.unsplash.com/photo-1549696504-8adee7fc3d11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "work",
                color: "green",
                title: "Project Management",
                image: "https://images.unsplash.com/photo-1549748206-57378bd2316c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "team",
                color: "red",
                title: "Team Tasks",
                image: "https://images.unsplash.com/photo-1549742352-41da1d1abb77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "orders",
                color: "cyan",
                title: "Orders",
                image: "https://images.unsplash.com/photo-1549742017-bb6fae6d2df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "sales",
                color: "orange",
                title: "Sales Pipeline",
                image: "https://images.unsplash.com/photo-1549741669-eab99fe172a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
            {
                upperText: "sprints",
                color: "blue",
                title: "Agile Sprints",
                image: "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
                quote: "This is a special quote and is very meaningful indeed that it will influence people.",
                quoteName: "Becky from Technical Services"
            },
        ];
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

