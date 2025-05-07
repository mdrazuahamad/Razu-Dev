import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rawProjects from "../data/projects";
import "../assets/styles/Portfolio.css";
import { validateProjectIDs, generateUniqueProjects } from "../utils/validateProjects";

// Process and validate projects
const projectsData = generateUniqueProjects(rawProjects);
validateProjectIDs(projectsData);

const categories = ["All", "CMS", "React"];

const Portfolio = ({ showAll = false }) => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === filter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, visibleCount);

  const navigate = useNavigate();
  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
    setTimeout(() => {
      navigate("/portfolio");
    }, 100);
  };

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='section-title'>Portfolio</h2>

      <div className='portfolio-filters'>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(8);
            }}>
            {cat}
          </button>
        ))}
      </div>

      <div className='portfolio-grid'>
        {visibleProjects.map((project) => (
          <div key={project.id} className='portfolio-card'>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.tech.join(", ")}</p>
            <div className='project-links'>
              <a href={project.live} target='_blank' rel='noreferrer'>
                Live
              </a>
              <a href={project.github} target='_blank' rel='noreferrer'>
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      {!showAll && visibleCount < filteredProjects.length && (
        <div className='load-more-container'>
          <button className='load-more-btn' onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
