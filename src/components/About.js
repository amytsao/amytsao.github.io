import React from "react";
import Ghostie from "./Ghostie";
import avatar from "../assets/images/avatar.jpg";

const About = () => {
  return (
    <div className="about">
      <h2>AMY TSAO</h2>
      <img className="img-profile" src={avatar} alt="" />
      <div>web developer</div>
      <div>foodie</div>
      <div>mobile game addict</div>
      <div>aspiring pun master</div>
      <Ghostie />
    </div>
  );
};

export default About;
