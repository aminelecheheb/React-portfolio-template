import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { setTyper, words } from "./typing";
import { useEffect, useRef } from "react";

const About = () => {
  const text = useRef();
  useEffect(() => {
    setTyper(text, words);
  }, []);
  return (
    <>
      <section className=" about__container" id="about">
        <div className="about-content">
          <h2>
            <span></span> Hello i'm
          </h2>
          <h1 class="glitch">Amine Lech</h1>
          <h1 class="typing-text" ref={text}></h1>
        </div>
        <div className="img-wrapper">
          <img
            src="https://retro-show-r3tr0.vercel.app/static/416b46a8bd26e2cb606b7fba8166f579/7ac0b/person.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
