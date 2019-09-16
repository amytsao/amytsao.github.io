import React, { useState } from "react";
import Layout from "../components/layout";
import ImagesGallery from "../components/ImagesGallery";
import "../assets/scss/imagesGallery.scss";

const japanPhotos = "WanH3rQat6DUqfAn8";
const dogPhotos = "m83WhST8P6AHRtuE6";
const catPhotos = "MPFtBfabsnHvxeCz7";

const Photos = () => {
  const [state, setState] = useState(japanPhotos);
  const changePhotoID = id => {
    if (id !== state) {
      setState(id);
    }
  };

  return (
    <Layout>
      <h1>Photos</h1>
      <div>
        I've taken a plethora of pictures of these things, so I thought I'd make
        an album. :)
      </div>
      <button onClick={() => changePhotoID(japanPhotos)} className="album">
        Japan
      </button>
      <button onClick={() => changePhotoID(dogPhotos)} className="album">
        Dogs
      </button>
      <button onClick={() => changePhotoID(catPhotos)} className="album">
        Cats
      </button>
      <ImagesGallery googlePhotosID={state} />
    </Layout>
  );
};

export default Photos;
