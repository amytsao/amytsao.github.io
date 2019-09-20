import React from "react";
import "../assets/scss/main.scss";

import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
