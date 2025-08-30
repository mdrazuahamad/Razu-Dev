import React from "react";
import { FaLaptopCode, FaUsers, FaClock, FaAward } from "react-icons/fa";
import "../assets/styles/WhyChooseMeAlt.css";

const reasons = [
  {
    icon: <FaLaptopCode />,
    title: "Expert Development",
    description: "I craft modern, efficient websites that match your business goals.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Focused",
    description:
      "Your vision comes first. I ensure your website reflects your brand perfectly.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Delivery",
    description: "I deliver projects within deadlines without compromising quality.",
  },
  {
    icon: <FaAward />,
    title: "Quality Guaranteed",
    description: "High standards in design, usability, and functionality are my promise.",
  },
];

const WhyChooseMeAlt = () => {
  return (
    <section className='why-choose-me-alt' id='why-choose-me'>
      <h2 className='section-title'>Why Choose Me?</h2>
      <p className='section-subtitle'>
        I deliver professional web solutions that help your business grow.
      </p>

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
    </section>
  );
};

export default WhyChooseMeAlt;
