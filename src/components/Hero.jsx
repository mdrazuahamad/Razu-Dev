import React, { useState } from "react"; // Add useState import
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaNpm,
  FaFigma,
  FaWordpress,
  FaShopify,
  FaLaravel,
  FaDocker,
  FaLinkedin,
} from "react-icons/fa";

import heroImage from "../assets/images/hero-image.png";
import heroVideo from "../assets/videos/vdo.mp4"; // Ensure correct path
import "../assets/styles/Hero.css";

const Hero = () => {
  const [isPaused, setIsPaused] = useState(false); // Define the state

  return (
    <section className='hero' id='home'>
      {/* Background Video */}
      <video className='hero-video' autoPlay loop muted playsInline>
        <source src={heroVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='hero-overlay'>
        {/* Hero Content */}
        <motion.div
          className='hero-content'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}>
          <h1 className='hero-title'>
            Hi, I'm <span className='highlight'>MD Razu Ahamad</span>
          </h1>
          <p className='hero-subtitle'>
            Crafting Scalable Web Solutions with Modern Technologies
          </p>

          <TypeAnimation
            sequence={[
              "React.js Developer",
              2000,
              "Node.js & API Specialist",
              2000,
              "CMS Expert (WordPress, Shopify)",
              2000,
              "JavaScript Enthusiast",
              2000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='typewriter'
          />
          <p className='experience'>
            ✅ 4+ Years Experience | 🌍 Open to Remote | 🔒 100% Job Success
          </p>

          <motion.a
            href='#contact'
            className='btn'
            aria-label='Hire Me - Go to Contact Section'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Let’s Build Together
          </motion.a>

          <div className='social-icons'>
            <a href='https://github.com/mdrazuahamad' target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/mdrazuahamad/'
              target='_blank'
              rel='noreferrer'>
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className='hero-image'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}>
          <div className='orbit-wrapper'>
            {/* Hero Image */}
            <img src={heroImage} alt='Razu Ahamad' className='center-image' />

            {/* Orbit Icons */}
            <div
              className='orbit-icons-wrapper'
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}>
              <div className={`orbit-icons ${isPaused ? "paused" : ""}`}>
                {[
                  FaReact,
                  FaNodeJs,
                  FaHtml5,
                  FaCss3Alt,
                  FaJs,
                  FaGithub,
                  FaNpm,
                  FaFigma,
                  FaWordpress,
                  FaShopify,
                  FaLaravel,
                  FaDocker,
                ].map((Icon, index) => {
                  const angle = (370 / 12) * index;
                  const radius = 300; // Adjust radius for the orbit
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <Icon
                      key={index}
                      className='orbit-icon'
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
