import React from "react";
import "../assets/styles/Contact.css";

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <form className='contact-form'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='Your Name' required />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='Your Email' required />

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Your Message'
            required></textarea>

          <button type='submit'>Send Message</button>
        </form>

        <div className='map'>
          <iframe
            title='Location Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022636857574!2d89.26717941436636!3d23.750903884591886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff104c9d7d934b%3A0x5f0a11a6aeb9999d!2sJessore!5e0!3m2!1sen!2sbd!4v1625678486712!5m2!1sen!2sbd'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
