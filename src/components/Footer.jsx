import React from "react";
import "../assets/styles/Footer.css"; // Adjust the path as necessary
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
          <h3>Quick Links</h3>
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

        {/* Social Links */}
        <div className='footer-column'>
          <h3>Follow Me</h3>
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
            <a href='mailto:your@email.com'>
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
