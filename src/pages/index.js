import React, { useState, useCallback } from "react";
import { useTransition, interpolate } from "react-spring";
import Helmet from "react-helmet";

import Card from "../components/Card";
import Pager from "../components/Pager";
import Layout from "../components/layout";

const HomeIndex = props => {
  const [idx, setIndex] = useState(0);
  // const items = [{}, {}, {}];
  const onClick = useCallback(() => {
    setIndex(i => (i + 1) % 3);
  }, [setIndex]);
  const transitions = useTransition(idx, i => i, {
    initial: null,
    from: { translate: 1000 },
    enter: { translate: 0 },
    leave: { translate: 1000 }
  });

  const cards = [
    { title: "Hi!", component: "About" },
    { title: "About Me", component: "AboutMe" },
    { title: "Recent Projects", component: "Projects" }
  ];
  return (
    <Layout>
      <Helmet>
        <title>Amy Tsao</title>
        <meta name="description" content="Web Developer" />
      </Helmet>
      <Pager
        count={3}
        selected={idx}
        onSelect={setIndex}
        cards={cards}
        className="navbar"
      />
      <div className="card-container" onClick={onClick}>
        {transitions.map(({ item, props, key }) => (
          <Card
            key={key}
            title={cards[item].title}
            style={{
              transform: interpolate(
                [props.translate],
                t => `translate3d(0,${t}px,0)`
              )
            }}
          >
            {cards[item].component}
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default HomeIndex;
