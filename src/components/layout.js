import React, { useState, useCallback } from "react";
import { useTransition, interpolate } from "react-spring";
import "../assets/scss/main.scss";

import Footer from "./Footer";
import Card from "./Card";
import Pager from "./Pager";

const Template = props => {
  const [idx, setIndex] = useState(0);
  // const items = [{}, {}, {}];
  const onClick = useCallback(() => {
    setIndex(i => (i + 1) % 3);
  }, [setIndex]);
  const transitions = useTransition(idx, i => i, {
    initial: null,
    from: { translate: 1000, rotate: 45 },
    enter: { translate: 0, rotate: 0 },
    leave: { translate: -1000, rotate: -45 }
  });

  const cards = [
    { title: "Hi!", component: "About" },
    { title: "About Me", component: "AboutMe" },
    { title: "Recent Projects", component: "Gallery" }
  ];

  return (
    <div className="page-container">
      <title>Amy Tsao | Web Developer</title>
      <div className="pager">
        <Pager count={3} selected={idx} onSelect={setIndex} cards={cards} />
      </div>
      <div className="card-container" onClick={onClick}>
        {transitions.map(({ item, props, key }) => (
          <Card
            key={key}
            title={cards[item].title}
            style={{
              transform: interpolate(
                [props.translate, props.rotate],
                (t, rot) =>
                  `translate3d(${t}px,${t}px,${t}px) rotate(${rot}deg)`
              )
            }}
          >
            {cards[item].component}
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Template;
