import React from "react";
import {
  FaCode,
  FaWordpressSimple,
  FaShopify,
  FaReact,
  FaWix,
  FaSquarespace,
} from "react-icons/fa";
import "../assets/styles/Services.css";

const servicesData = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Responsive and SEO-optimized websites built with modern technologies.",
  },
  {
    icon: <FaWordpressSimple />,
    title: "Custom WordPress Themes",
    description:
      "Tailored WordPress themes with custom functionality and fast performance.",
  },
  {
    icon: <FaShopify />,
    title: "Shopify Development",
    description: "Conversion-focused Shopify stores with custom themes and integrations.",
  },
  {
    icon: <FaReact />,
    title: "React Development",
    description:
      "Interactive and scalable web apps using React.js and modern JavaScript.",
  },
  {
    icon: <FaWix />,
    title: "Wix Website Design",
    description: "Professional, no-code Wix sites with branding and custom design.",
  },
  {
    icon: <FaSquarespace />,
    title: "Squarespace Development",
    description:
      "Visually stunning Squarespace websites built for creatives and businesses.",
  },
];

const Services = () => {
  return (
    <section id='services' className='services'>
      <div className='services-header'>
        <h2 className='section-title'>My Services</h2>
        <p className='section-subtitle'>
          End-to-end web development solutions for startups, businesses, and creators.
        </p>
      </div>

      <div className='services-grid'>
        {servicesData.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-icon'>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
