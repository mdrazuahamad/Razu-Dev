// src/components/Testimonials.jsx
import React from "react";
import Slider from "react-slick";
import { testimonials } from "../data/testimonials";
import "../assets/styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 5000,
};

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <h2 className='section-title'>What Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className='testimonial-card'>
            <div className='testimonial-content'>
              <img src={t.avatar} alt={t.name} className='testimonial-avatar' />
              <p className='testimonial-message'>“{t.message}”</p>
              <div className='testimonial-info'>
                <h4>{t.name}</h4>
                <span>{t.title}</span>
              </div>
              <div className='testimonial-rating'>
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
