import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // <-- correct for Vite + Swiper 9
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/styles/TechStack.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiGithub } from "react-icons/si";

const techData = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiGithub />, name: "GitHub", color: "#181717" },
];

const TechStackSlider = () => {
  return (
    <section className='techstack-slider'>
      <h2 className='slider-title'>Technologies I Use</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}>
        {techData.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className='tech-card'>
              <div className='tech-icon' style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3>{tech.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechStackSlider;
