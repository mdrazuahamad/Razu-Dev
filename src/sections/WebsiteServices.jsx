import "../assets/styles/WebsiteServices.css";
import React from "react";
import {
  FaShoppingCart,
  FaShopify,
  FaBuilding,
  FaNewspaper,
  FaGraduationCap,
  FaCamera,
  FaPlane,
  FaUser,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShoppingCart />,
    title: "Online Store Development",
    description:
      "Launch your professional online store with powerful features that attract customers and increase sales.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Online%20Store%20Development",
  },
  {
    icon: <FaShopify />,
    title: "Shopify Store Design",
    description:
      "Create a customized Shopify store with stunning visuals and user-friendly navigation for higher conversions.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Shopify%20Store%20Design",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Website Design",
    description:
      "Build a professional corporate website that reflects your brand identity and strengthens customer trust.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Corporate%20Website%20Design",
  },
  {
    icon: <FaNewspaper />,
    title: "Blog & Media Website",
    description:
      "Design a modern blog or media platform with optimized layouts for better engagement and content visibility.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Blog%20%26%20Media%20Website",
  },
  {
    icon: <FaGraduationCap />,
    title: "Learning/Education Platforms",
    description:
      "Develop interactive educational websites with smooth user experience, perfect for schools and e-learning.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Learning%20Education%20Platforms",
  },
  {
    icon: <FaCamera />,
    title: "Creative Portfolio Sites",
    description:
      "Showcase your work in style with elegant and minimal portfolio websites built to impress clients.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Creative%20Portfolio%20Sites",
  },
  {
    icon: <FaPlane />,
    title: "Travel & Tourism Websites",
    description:
      "Engage your audience with beautiful travel websites featuring booking systems, maps, and more.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Travel%20Tourism%20Websites",
  },
  {
    icon: <FaUser />,
    title: "Custom Web Solutions",
    description:
      "Get tailored website designs that highlight your brand, passion, and achievements in the best way.",
    whatsapp:
      "https://wa.me/8801994540932?text=Hi!%20I%20am%20interested%20in%20Custom%20Web%20Solutions",
  },
];

const WebsiteServices = () => {
  return (
    <section className='websiteservice-section'>
      <div className='websiteservice-header'>
        <h2>
          Build your strong online image with our <span>custom</span>
        </h2>
        <p>WEBSITE DESIGN SERVICES!</p>
      </div>

      <div className='websiteservice-grid'>
        {services.map((service, index) => (
          <div className='websiteservice-card' key={index}>
            <div className='websiteservice-icon'>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a
              href={service.whatsapp}
              target='_blank'
              rel='noopener noreferrer'
              className='btn'>
              Contact Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteServices;
