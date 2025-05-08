import React from "react";
import "../assets/styles/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Quick Links */}
        <div className='footer-column'>
          <h3>MD Razu Ahamad</h3>
          <p className='footer-role'>Web Developer & CMS Specialist</p>
          <p className='footer-description'>
            I am a passionate web developer with expertise in creating responsive and
            user-friendly websites. I specialize in CMS development and have a keen eye
            for design.
          </p>
        </div>
        {/* Quick Links */}
        <div className='footer-column'>
          <h3>Quick Links</h3>
          <hr />
          <ul>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='footer-column'>
          <h3>Contact Info</h3>
          <hr />
          <ul className='contact-info'>
            <li>
              <FaEnvelope /> mdrazuahamad8@gmail.com
            </li>
            <li>
              <FaPhone /> +880 1994540932
            </li>
            <li>
              <FaMapMarkerAlt /> Jessore, Khulna, Bangladesh
            </li>
          </ul>
        </div>

        {/* Follow Me */}
        <div className='footer-column follow'>
          <h3>Follow Me</h3>
          <hr />
          <div className='footer-socials'>
            <a
              href='https://github.com/your-github'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <a
              href='https://linkedin.com/in/your-linkedin'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a href='mailto:mdrazuahamad8@gmail.com'>
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <p className='footer-bottom'>
        © {new Date().getFullYear()} MD Razu Ahamad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
