import React from "react";
import { animated } from "react-spring";
import About from "./About";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";

const renderElement = el => {
  switch (el) {
    case "About":
      return About;
    case "AboutMe":
      return AboutMe;
    case "Gallery":
      return Gallery;
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
      <h1>{title}</h1>
      <MyComponent />
    </animated.div>
  );
};

export default Card;
