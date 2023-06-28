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
        slidesToShow: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
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
            des: "No testimonials yet",
            name: "(Name here)",
            img: "https://th.bing.com/th/id/OIP.JhXLZITkntWrDCk5mH6KzgAAAA?w=176&h=180&c=7&r=0&o=5&pid=1.7"
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