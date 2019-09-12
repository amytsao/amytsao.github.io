import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar-brand">
          <h2>Amy Tsao</h2>
          <div>
            <img className="img-profile" src={avatar} alt="" />
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
        </ul>
        <Footer />
      </header>
    );
  }
}

export default Header;
