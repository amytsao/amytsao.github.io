import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Slide from 'react-reveal/Slide';

class Gallery extends Component {
  renderGallery(images) {
    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <Slide bottom>
            <article className="work-item" key={i}>
              <a className="image fit thumb" href={obj.source}>
                <img src={obj.thumbnail} />
              </a>
              <h3>{obj.caption}</h3>
              <p>{obj.description}</p>
            </article>
        </Slide>
      );
    });

    return <div className="row">{gallery}</div>;
  }
  render() {
    const { images } = this.props;

    return <div>{this.renderGallery(images)}</div>;
  }
}

Gallery.displayName = "Gallery";
Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
