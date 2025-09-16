import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaUserClock,
  FaBolt,
} from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import "../assets/styles/Contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnndzrqd"); // Replace with your form ID
  const [showSuccess, setShowSuccess] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0);

  // Effect to handle form success state
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setFormResetKey((prev) => prev + 1); // triggers form reset
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e); // Only triggers Formspree submit
  };

  return (
    <section id='contact' className='contact-section'>
      <div className='container'>
        <h2 className='section-title'>Contact Me</h2>

        <div className='contact-wrapper'>
          <form className='contact-form' onSubmit={handleFormSubmit} key={formResetKey}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input id='name' type='text' name='name' required />
              <ValidationError prefix='Name' field='name' errors={state.errors} />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input id='email' type='email' name='email' required />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>

            <div className='form-group'>
              <label htmlFor='service'>Select Your Service Name</label>
              <select name='service' id='service' required>
                <option value=''>-- Select a Service --</option>
                <option value='wordpress'>WordPress Development</option>
                <option value='shopify'>Shopify Store Setup</option>
                <option value='react-app'>React Web App</option>
                <option value='custom'>Custom Web Solution</option>
              </select>
              <ValidationError prefix='Service' field='service' errors={state.errors} />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Your Message</label>
              <textarea id='message' name='message' rows='5' required />
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>

            <button type='submit' className='btn' disabled={state.submitting}>
              {state.submitting ? (
                <span className='spinner'></span> // Spinner style below
              ) : (
                "Send Message"
              )}
            </button>

            {showSuccess && (
              <p className='success-message'>✅ Thanks! Your message was sent.</p>
            )}
          </form>

          <div className='contact-info-container'>
            <h3>Contact Information</h3>
            <hr />
            <h4>MD Razu Ahamad</h4>
            <ul className='contact-info-list'>
              <li>
                <a href='mailto:mdrazuahamad8@gmail.com' className='contact-info-item'>
                  <FaEnvelope className='contact-icon' /> mdrazuahamad8@gmail.com
                </a>
              </li>
              <li>
                <a
                  href='https://wa.me/8801994540932'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-info-item'>
                  <FaWhatsapp className='contact-icon' /> +880 1994 540932
                </a>
              </li>
              <li>
                <a
                  href='https://www.google.com/maps/place/Jessore,+Khulna,+Bangladesh'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='contact-info-item'>
                  <FaMapMarkerAlt className='contact-icon' /> Jessore, Khulna, Bangladesh
                </a>
              </li>
            </ul>

            <div className='special-notes-container'>
              <h4>Special Notes</h4>
              <ul className='special-notes-list'>
                <li className='special-note-item'>
                  <FaClock className='special-note-icon' />
                  <strong>24/7 Support:</strong> Critical issues anytime.
                </li>
                <li className='special-note-item'>
                  <FaUserClock className='special-note-icon' />
                  <strong>Flexible Hours:</strong> Available by request.
                </li>
                <li className='special-note-item'>
                  <FaBolt className='special-note-icon' />
                  <strong>Emergency Services:</strong> Priority handling.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='contact-map'>
          <iframe
            title='MaanRishfa IT Solutions Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0846070538527!2d89.3968982!3d23.0267475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffa1b32c6d0767%3A0x5352ebdbb803627d!2sMaanRishfa%20IT%20Solutions!5e0!3m2!1sen!2sbd!4v1715332663019!5m2!1sen!2sbd'
            width='100%'
            height='400'
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
