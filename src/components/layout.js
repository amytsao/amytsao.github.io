import React from "react";
import "../assets/scss/main.scss";

import Footer from "./Footer";

const Template = ({ children }) => {
  return (
    <div className="page-container">
      {children}
      <Footer />
    </div>
  );
};

export default Template;
