import React, { Fragment, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "../assets/scss/imagesGallery.scss";
import LoadingScreen from "./LoadingScreen";

const ImagesGallery = ({ googlePhotosID }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // grab list of image urls from album
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      axios({
        method: "get",
        url: `https://google-photos-album-demo.glitch.me/${googlePhotosID}`
      }).then(response => {
        setImages(response.data);
        setIsLoading(false);
      });
    };
    fetchData();
  }, [googlePhotosID]);

  // render images
  const renderedImages =
    images.length &&
    images.map((image, index) => {
      return (
        <Fade bottom>
          <img className="grid-item" alt={`google ${index}`} src={image} />
        </Fade>
      );
    });

  return (
    <Fragment>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="grid">{renderedImages}</div>
      )}
    </Fragment>
  );
};
export default ImagesGallery;
