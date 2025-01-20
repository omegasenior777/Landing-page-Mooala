import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Panel6 = () => {

    const testimonials = [
        {
            text: "Lifesaver for allergies!",
            author: "Author's name",
            location: "Los Angeles, CA",
        },
        {
            text: "My daughter took one sip and said, 'You better get more of this!'",
            author: "Author's name",
            location: "Los Angeles, CA",
        },
        {
            text: "Nice something this good is healthy & dairy free with no added sugar",
            author: "Author's name",
            location: "Los Angeles, CA",
        },
        {
            text: "One of the best plant-based milk products I have ever had. Highly recommend",
            author: "Author's name",
            location: "Los Angeles, CA",
        },
        {
            text: "Seamlessly replaced all other milks!",
            author: "Author's name",
            location: "Los Angeles, CA",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };



    return (
        <div className="painel6">
            <div className="text">
                <h1>Our customers say</h1>
            </div>
            <div className="carousel-container">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="author-info">
                                <p className="author-name">{testimonial.author}</p>
                                <p className="author-location">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Panel6;