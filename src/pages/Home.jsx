// src/App.jsx
import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../sections/TechStack";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import WebsiteServices from "../sections/WebsiteServices";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import WhyChooseMe from "../sections/WhyChooseMe";
import FreeAudit from "../sections/FreeAudit";

function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 60,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <FreeAudit />
      <About />
      <TechStack />
      <Portfolio />
      <Services />
      <WebsiteServices />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
