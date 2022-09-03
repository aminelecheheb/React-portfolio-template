import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = ({ skills }) => {
  return skills.map((item) => {
    const { skill, status } = item;
    return (
      <div className="skill">
        <BsPatchCheckFill />
        <div className="one-skill">
          <h4>{skill}</h4>
          <p>{status}</p>
        </div>
      </div>
    );
  });
};

export default Skill;
