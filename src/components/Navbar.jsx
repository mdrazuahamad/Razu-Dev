import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const isScrollTrackedPage = ["/", "/portfolio"].includes(location.pathname);

  // Handle scroll and update active section
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    // Track active section only on specified pages
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
    handleScroll(); // Run initially on mount

    if (location.pathname === "/portfolio") {
      setActiveSection("portfolio");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();

    if (id === "portfolio") {
      navigate("/portfolio");
      setMenuOpen(false); // Close menu after navigation
    } else if (isScrollTrackedPage) {
      smoothScroll(e, `#${id}`);
    } else {
      navigate(`/#${id}`);
      setMenuOpen(false); // Close menu after navigating to homepage section
    }
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
            <a
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={activeSection === id ? "active" : ""}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
