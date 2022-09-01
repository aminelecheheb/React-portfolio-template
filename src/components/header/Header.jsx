import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import STAR from "../../assets/star.png";
import LAPTOP from "../../assets/laptop.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <img className="star" src={STAR} alt="star" />

        <div className="string"></div>

        <h1 className="hero-title">
          Create beautiful, unique, <br /> responsive and fast websites <br />{" "}
          with <span>CODAMINE</span>
        </h1>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
