import React from "react";

import cornerstone from "../assets/images/sites/cornerstone.png";
import ida from "../assets/images/sites/ida.png";
import ford from "../assets/images/sites/ford.jpg";
import hci from "../assets/images/sites/hci.jpeg";
// import fastaff from "../assets/images/sites/fastaff.jpeg";
// import ua from "../assets/images/sites/ua.jpeg";

const DEFAULT_IMAGES = [
  {
    id: "1",
    source: "https://csod.com",
    thumbnail: cornerstone,
    caption: "Cornerstone Ondemand",
    description:
      "Rebuilt site with team with JAMstack (React, Gatsby, Netlify, and Sanity)"
  },
  {
    id: "2",
    source: "https://www.documentary.org/",
    thumbnail: ida,
    caption: "IDA Documentary",
    description:
      "Wrote custom scripts to help with ease of access of site as well as theming"
  },
  {
    id: "3",
    source: "https://www.fordtheatres.org/",
    thumbnail: ford,
    caption: "Ford Theatres",
    description: "Setup and front page theming"
  },
  {
    id: "4",
    source: "https://healthy.ucla.edu/",
    thumbnail: hci,
    caption: "Healthy Campus Initiative - UCLA",
    description: "Designed and created the site using Wordpress and custom PHP."
  }
];

const images = DEFAULT_IMAGES.map(
  ({ id, source, thumbnail, caption, description }) => ({
    source,
    thumbnail,
    caption,
    description
  })
);

const renderProjects = images => {
  if (!images) return;

  const projects = images.map((obj, i) => {
    return (
      <a className="image fit thumb work-item" href={obj.source}>
        <img alt="project" src={obj.thumbnail} />
        <h3>{obj.caption}</h3>
        <p>{obj.description}</p>
      </a>
    );
  });

  return <div className="gallery-row">{projects}</div>;
};

const Projects = () => {
  return <div>{renderProjects(images)}</div>;
};

Projects.displayName = "Projects";

export default Projects;
