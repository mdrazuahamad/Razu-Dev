import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/razu.png";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const isScrollTrackedPage = ["/", "/portfolio"].includes(location.pathname);

  const handleScroll = () => {
    const navbar = document.querySelector(".nav-container");

    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    if (isScrollTrackedPage) {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionTop = current.offsetTop - 100;
        const sectionHeight = current.offsetHeight;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (id === "portfolio") {
      if (location.pathname !== "/portfolio") {
        navigate("/portfolio");
      } else {
        smoothScroll(`#portfolio`);
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/"); // First navigate to home
        // Delay smooth scroll until page loads
        setTimeout(() => {
          const targetEl = document.getElementById(id);
          if (targetEl) {
            window.scrollTo({
              top: targetEl.offsetTop - 60,
              behavior: "smooth",
            });
          }
        }, 300); // Adjust delay if needed
      } else {
        // Already on home, scroll without changing URL
        smoothScroll(`#${id}`);
      }
    }

    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className='nav-container'>
      <nav
        className={`navbar ${
          location.pathname === "/" ? "navbar-home" : "navbar-portfolio"
        }`}>
        <div className='logo' onClick={() => navigate("/")}>
          <img src={logo} alt='RazuDev Logo' />
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={(e) => handleNavClick(e, id)}
                className={`nav-link-btn ${activeSection === id ? "active" : ""}`} // Apply active class if section matches
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
