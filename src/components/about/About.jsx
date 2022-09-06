import React from "react";
import "./about.css";
import ME from "../../assets/port.jpg";
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
          <div
            className="floating square purple"
            style={{ top: "2rem", left: "2rem" }}
          ></div>
          <div
            className="floating square pink"
            style={{ top: "4rem", right: "24rem" }}
          ></div>
          <div
            className="floating square orange"
            style={{ top: "16rem", right: "2rem" }}
          ></div>
          <div
            className="floating square purple"
            style={{ bottom: "16rem", right: "16rem" }}
          ></div>
          <div
            className="floating square pink"
            style={{ bottom: "6rem", left: "8rem" }}
          ></div>
          <div
            className="floating square pink"
            style={{ bottom: "9rem", right: "24rem" }}
          ></div>
          <div
            className="floating circle purple"
            style={{ top: "12rem", right: "6rem" }}
          ></div>
          <div
            className="floating circle orange"
            style={{ bottom: "8rem", right: "8rem" }}
          ></div>
          <div
            className="floating circle purple"
            style={{ top: "8rem", right: "40rem" }}
          ></div>
          <div
            className="floating circle orange"
            style={{ top: "4rem", left: "32rem" }}
          ></div>
          <h2>
            <span></span> Hello i'm
          </h2>
          <h1 className="glitch">Amine Lech</h1>
          <h1 className="typing-text" ref={text}></h1>
          <a className="btn cv-btn" href="">
            download cv
          </a>
        </div>
        <div className="img-wrapper">
          <img src={ME} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
