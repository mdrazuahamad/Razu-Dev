import React from "react";
import { FaLaptopCode, FaUsers, FaClock, FaAward } from "react-icons/fa";
import "../assets/styles/WhyChooseMeAlt.css";
import whyimage from "../../public/images/image-why.jpg";

const reasons = [
  {
    icon: <FaLaptopCode />,
    title: "Expert Development",
    description: "Modern & efficient websites tailored to your business.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Focused",
    description: "Your vision comes first for every project.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "Projects delivered on schedule, always.",
  },
  {
    icon: <FaAward />,
    title: "Quality Guaranteed",
    description: "High standards in design, usability & functionality.",
  },
];

const WhyChooseMeAlt = () => {
  return (
    <section className='why-choose-me-alt' id='why-choose-me'>
      <h2 className='section-title'>Why Choose Me?</h2>
      <p className='section-subtitle'>
        I deliver professional web solutions that help your business grow.
      </p>
      <div className='divider'>
        {/* Media Section (Image / Video) */}
        <div className='media-container'>
          <h3 className='media-title'>Grow Your Business Faster</h3>
          <p className='media-description'>
            I create websites that attract more customers, increase engagement, and boost
            your revenue.
          </p>
          <img src={whyimage} alt='Why Choose Me' className='media-image' />
          <br />
          <br />

          {/* Left-aligned CTA Button */}
          <div className='cta-wrapper'>
            <a href='#contact' className='btn'>
              Boost Your Business
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div className='timeline-container'>
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className='timeline-icon'>{reason.icon}</div>
              <div className='timeline-content'>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeAlt;
