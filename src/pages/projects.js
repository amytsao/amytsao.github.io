import { useState, useCallback } from "react";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import { useTransition, interpolate } from "react-spring";
import Layout from "../components/layout";
import Card from "../components/Card";
import Pager from "../components/Pager";
import cornerstone from "../assets/images/sites/cornerstone.png";
import ida from "../assets/images/sites/ida.png";
import ford from "../assets/images/sites/ford.jpg";
import hci from "../assets/images/sites/hci.jpeg";
// import fastaff from "../assets/images/sites/fastaff.jpeg";
// import ua from "../assets/images/sites/ua.jpeg";

const projectInfo = [
  {
    id: "1",
    source: "https://csod.com",
    thumbnail: cornerstone,
    title: "Cornerstone Ondemand",
    description:
      "Rebuilt site with team with JAMstack (React, Gatsby, Netlify, and Sanity)"
  },
  {
    id: "2",
    source: "https://www.documentary.org/",
    thumbnail: ida,
    title: "IDA Documentary",
    description:
      "Wrote custom scripts to help with ease of access of site as well as theming"
  },
  {
    id: "3",
    source: "https://www.fordtheatres.org/",
    thumbnail: ford,
    title: "Ford Theatres",
    description: "Setup and front page theming"
  },
  {
    id: "4",
    source: "https://healthy.ucla.edu/",
    thumbnail: hci,
    title: "Healthy Campus Initiative - UCLA",
    description: "Designed and created the site using Wordpress and custom PHP."
  }
];

const projectCss = css`
  display: block;
  max-width: 400px;
  flex-direction: row;
  text-decoration: none;
  h3 {
    border-bottom: 3px solid #f0c9c9;
    font-weight: 600;
  }
  img {
    max-width: 400px;
  }
  > * {
    margin-bottom: 10px;
  }

  @media (max-width: 820px) {
    max-width: 300px;
    img {
      display: none;
    }
  }
`;

const Projects = () => {
  const [idx, setIndex] = useState(0);
  // const items = [{}, {}, {}];
  const onClick = useCallback(() => {
    setIndex(i => (i + 1) % 4);
  }, [setIndex]);
  const transitions = useTransition(idx, i => i, {
    initial: null,
    from: { translate: 1000 },
    enter: { translate: 0 },
    leave: { translate: 1000 }
  });
  return <Layout>
    
    <Pager
      count={4}
      selected={idx}
      onSelect={setIndex}
      cards={projectInfo}
    />
    <div className="card-container" onClick={onClick}>
        {transitions.map(({ item, props, key }) => (
          <Card
            key={key}
            title={projectInfo[item].title}
            style={{
              transform: interpolate(
                [props.translate],
                t => `translate3d(${t}px,0,0)`
              )
            }}
          >
            <a css={projectCss} href={projectInfo[item].source}>
              <h3>{projectInfo[item].title}</h3>
              <p>{projectInfo[item].description}</p>
              <img alt="project" src={projectInfo[item].thumbnail} />
            </a>
          </Card>
        ))}
      </div>
  </Layout>;
};

export default Projects;
