import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import STAR from "../../assets/star.png";
import LAPTOP from "../../assets/laptop.png";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__text">
          <h1 className="title">
            Do you want responsive, unique and fast website?{" "}
          </h1>
          <h1 className="hero">that's my profession</h1>
          <a href="#contact" className="hero-btn">
            contact us
          </a>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
