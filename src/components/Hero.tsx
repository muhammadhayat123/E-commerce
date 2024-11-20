"use client"
import Slider from "react-slick"
import React from 'react'
import Slide from './Slides'; // Ensure the component name matches here

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        pauseOnHover: false        
    };

    const slideData = [
        {
          id: 1,
          image: "/slide1.jpg",
          mainTitle: "Fresh Summer Collection",
          title: "Trendy Styles",
          price: "$15",
        },
        {
          id: 2,
          image: "/slide2.jpg",
          mainTitle: "Exclusive Offers",
          title: "New Arrivals",
          price: "$25",
        },
        {
          id: 3,
          image: "/slide3.jpg",
          mainTitle: "Best Deals",
          title: "Season Sale",
          price: "$10",
        },
    ];

    return (
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide 
                        key={item.id}
                        img={item.image}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}       
                    />
                ))}    
            </Slider>      
        </div>
    );
};

export default Hero;
