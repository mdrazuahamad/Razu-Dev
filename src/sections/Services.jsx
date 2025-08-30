import React from "react";
import {
  FaCode,
  FaWordpressSimple,
  FaShopify,
  FaReact,
  FaWix,
  FaSquarespace,
} from "react-icons/fa";
import { motion } from "framer-motion";
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

// Container animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Each card animation with blur
const card = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 0.8,
    },
  },
};

const Services = () => {
  return (
    <motion.section
      id='services'
      className='services'
      initial='hidden'
      animate='show'
      variants={container}>
      {/* Header */}
      <motion.div
        className='services-header'
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.1 }}>
        <h2 className='section-title'>My Services</h2>
        <p className='section-subtitle'>
          End-to-end web development solutions for startups, businesses, and creators.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div className='services-grid' variants={container}>
        {servicesData.map((service, index) => (
          <motion.div
            className='service-card'
            key={index}
            variants={card}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}>
            <div className='service-icon'>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
