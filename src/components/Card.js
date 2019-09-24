import React from "react";
import { animated } from "react-spring";
import About from "./About";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

const renderElement = el => {
  switch (el) {
    case "About":
      return About;
    case "AboutMe":
      return AboutMe;
    case "Projects":
      return Projects;
    default:
      return About;
  }
};

const Card = ({ children, title, style }) => {
  const MyComponent = renderElement(children);
  return (
    <animated.div
      className="card"
      style={{
        ...style
      }}
    >
      <MyComponent />
    </animated.div>
  );
};

export default Card;
