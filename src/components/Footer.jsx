import React from "react";
import "../assets/styles/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiPayoneer, SiWise } from "react-icons/si"; // official brand icons
import logo from "../assets/images/razu.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Quick Links */}
        <div className='footer-column'>
          <img
            src={logo}
            alt='MD Razu Ahamad'
            style={{ width: "200px", height: "auto" }}
          />
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
              <a href='#portfolio'>Portfolio</a>
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
            <li className='flex items-center gap-2 text-gray-700'>
              <a
                href='mailto:mdrazuahamad8@gmail.com'
                style={{ gap: "8px", display: "flex", alignItems: "center" }}>
                <FaEnvelope className='text-gray-600' />
                mdrazuahamad8@gmail.com
              </a>
            </li>
            <li>
              <a
                style={{ gap: "8px", display: "flex", alignItems: "center" }}
                href='https://wa.me/8801994540932'
                target='_blank'
                rel='noopener noreferrer'>
                <FaWhatsapp
                  style={{
                    fontSize: "14px",
                  }}
                />
                +880 1994 540932
              </a>
            </li>
            <li className='flex items-center gap-2 text-gray-700'>
              <a
                href='https://www.google.com/maps/place/Jessore,+Khulna,+Bangladesh'
                target='_blank'
                rel='noopener noreferrer'
                style={{ gap: "8px", display: "flex", alignItems: "center" }}>
                <FaMapMarkerAlt className='text-red-500' />
                Jessore, Khulna, Bangladesh
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Me */}

        <div className='footer-column follow'>
          <h3>Follow & Support Me</h3>
          <hr />
          <div className='footer-socials'>
            <a
              href='https://github.com/mdrazuahamad'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/mdrazuahamad/'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedin />
            </a>
            <a href='mailto:mdrazuahamad8@gmail.com'>
              <FaEnvelope />
            </a>
          </div>
          <div>
            <h3>Payment Methods</h3>
            <div className='footer-payments'>
              <a
                href='https://www.payoneer.com'
                target='_blank'
                rel='noopener noreferrer'
                className='payment-btn payoneer'>
                <SiPayoneer style={{ marginRight: "8px" }} /> Payoneer
              </a>
              <a
                href='https://wise.com/send-money'
                target='_blank'
                rel='noopener noreferrer'
                className='payment-btn wise'>
                <SiWise style={{ marginRight: "8px" }} /> Wise
              </a>
            </div>
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
