import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div>
        Came to UCLA for college and then accidentally forgot to leave
        California. Frequent visitor of hiking trials, animal shelters, and
        javascript meetups.
      </div>
      <div>
        <strong>Podcasts: </strong>99% Invisible, Syntax, The Cut on Tuesdays
      </div>
      <div>
        <strong>Current Music: </strong>Olive Tree, Massive Attack, Vulfpeck
      </div>
      <button>
        <a href="/photos">Photos!</a>
      </button>
    </div>
  );
};

export default AboutMe;
