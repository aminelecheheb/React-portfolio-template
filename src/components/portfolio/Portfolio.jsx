import React from "react";
import "./portfolio.css";
import Slider from "./Slider";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="title">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="works-container">
        {/* <div className="works">
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
          <div className="project-container"></div>
        </div> */}
        <Slider />
      </div>
    </section>
  );
};

export default Portfolio;
