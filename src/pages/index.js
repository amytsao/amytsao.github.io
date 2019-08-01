import React from "react";
import Helmet from "react-helmet";
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";
import Gallery from "../components/Gallery";
import Ghostie from "../components/Ghostie";

import cornerstone from "../assets/images/sites/cornerstone.png";
import ida from "../assets/images/sites/ida.png";
import ford from "../assets/images/sites/ford.jpg";
import hci from "../assets/images/sites/hci.jpeg";
import fastaff from "../assets/images/sites/fastaff.jpeg";
import ua from "../assets/images/sites/ua.jpeg";

const DEFAULT_IMAGES = [
  {
    id: "1",
    source: "https://csod.com",
    thumbnail: cornerstone,
    caption: "Cornerstone Ondemand",
    description:
      "Rebuilt site with team with new technologies such as React, Gatsby, Netlify, and Sanity."
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
  },
  {
    id: "5",
    source: "https://www.fastaff.com/",
    thumbnail: fastaff,
    caption: "Fastaff",
    description:
      "Created custom module to integrate their site with Peoplesoft, made improvements to their job searching filters as well as css modifications to the site."
  },
  {
    id: "5",
    source: "http://phoenixmed.arizona.edu/",
    thumbnail: ua,
    caption: "University of Arizona",
    description:
      "Configured site, assisted with theming, and created custom views for the School of Medicine (Phoenix) site"
  }
];

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Amy Tsao</title>
          <meta name="description" content="Web Developer" />
        </Helmet>

        <div id="main">
            <section id="one">
              <Fade bottom>
                <h2>
                  About Amy
                  <br />
                </h2>
                <div>
                  Web developer, mobile game addict, aspiring pun master.
                  <br />
                  Here to pet all the dogs.
                </div>
              </Fade>
              <Ghostie />
            </section>

            <section id="two">
              <Fade bottom>
              <a name="projects">
                <h2>Recent Projects</h2>
              </a>
              </Fade>
              <Gallery
                images={DEFAULT_IMAGES.map(
                  ({ id, source, thumbnail, caption, description }) => ({
                    source,
                    thumbnail,
                    caption,
                    description
                  })
                )}
              />
            </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
