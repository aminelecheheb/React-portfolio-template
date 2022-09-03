import React from "react";
import "./experience.css";
import { frontEnd, backEnd, otherSkills } from "./skills";
import Skill from "./Skill";

const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-container">
        <div className="half text">
          <div className="top">
            <h1>I'm full stack web developer working from home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              nam numquam! Facere recusandae quidem voluptatum quis tenetur!
              Voluptatem sed accusantium porro quod? Eaque tempore, amet illo,
              doloremque laborum praesentium ratione architecto fugit alias sit
              a, ea aliquid blanditiis unde ullam!
            </p>
          </div>

          <div className="about-contact">
            <h5>E-mail : aminelch01@gmail/com</h5>
            <h5>whatsapp : +2135555555</h5>
          </div>
        </div>
        <div className="half skills">
          <div className="skills-center">
            <div className="front-end">
              <h2>front-end</h2>
              <Skill skills={frontEnd} />
            </div>
            <div className="back-end">
              <h2>back-end</h2>
              <Skill skills={backEnd} />
            </div>
          </div>
          <div className="other-skills">
            <h2>Other skills</h2>
            <div className="flex">
              <Skill skills={otherSkills} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
