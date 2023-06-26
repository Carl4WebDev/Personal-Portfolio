import React from 'react'
import "./Testimonial.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RubberBand from 'react-reveal/RubberBand';

function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 570,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    const data = [
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            name: "Manuel Quezon",
            position: "Fullstack web developer",
            img: "https://www.sott.net/image/s17/349521/full/maxresdefault.jpg"

        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            name: "Apolinaryo Mabini",
            position: "Fullstack web developer",
            img: "https://www.sott.net/image/s17/349521/full/maxresdefault.jpg"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            name: "Jose Rizal",
            position: "Fullstack web developer",
            img: "https://www.sott.net/image/s17/349521/full/maxresdefault.jpg"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            name: "Andres Bonifacio",
            position: "Fullstack web developer",
            img: "https://www.sott.net/image/s17/349521/full/maxresdefault.jpg"
        },
        {
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            name: "Antonio Luna",
            position: "Fullstack web developer",
            img: "https://www.sott.net/image/s17/349521/full/maxresdefault.jpg"
        },
    ]

    const colors = [
      "#111816",
      "#47023b",
      "#ecd181",
      "#8a836d",
      "#eea38d",
      
    ]
     
  return (
    <div className='container testimonial-section' id='testimonial'>
        <div className='section-title'>
          <h3> Testimonial  </h3>
          <span className='line'></span>
        </div>

        <RubberBand>
          <div className='testimonial-slider'>

            <Slider {...settings}>
                {data.map((item, index) => {
                    return (

                        <div className='content-slider-main' >
                          <div className='content-slider' key={index} style={{backgroundColor: colors[index]}}>
                              <img src={item.img} alt='testimonial image' className='center-image'/> 
                              <p>{item.name}</p>
                              <p>{item.position}</p>
                              <p>{item.des}</p>

                          </div>

                        </div>

                    )
                })}
            </Slider>

          </div>
        </RubberBand>

    </div>
  )
}

export default Testimonial