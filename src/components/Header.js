import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import resume from "../assets/resume.pdf";

const navCss = css`
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 20px;
  cursor: pointer;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    list-style: none;
  }

  a {
    color: #4baea0;
    padding-bottom: 10px;
    text-decoration: none;

    &:after {
      border-bottom: solid 3px #4baea0;  
      content: '';
      display: block;
      padding-bottom: 10px;
      transform: scaleX(0);  
      transition: transform 250ms ease-in-out;
    }

    &:active,
    &:focus,
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
  @media (max-width: 450px) {
  }
`;

const mobileMenuCss = css`
  display: none;
  width: 40px;
  height: 40px;

  &::before,
  &::after {
    position: absolute;
    width: 24px;
    height: 3px;
    background: #fff;
    border-radius: 1px;
    content: '';
    transition: transform 250ms ease-in-out;
  }

  &::before {
    top: 7px;
    right: 0;
  }

  &::after {
    top: -7px;
    right: 0;
  }

  @media(max-width: 550px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 10%;

    &.open {
      &::before {
        transform: translateY(-340%) rotate(45deg);
      }
  
      &::after {
        transform: translateY(100%) rotate(-45deg);
      }
    }

    &.closed + ul {
      display: none;
    }

    &.open + ul {
      background: #000;
      display: block;
    }
  }
`;

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  // open / close main mobile menu
  const toggleMobileMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <header>
      <div onClick={toggleMobileMenu} className={menuState ? 'open' : 'closed'} css={mobileMenuCss}></div>
      <ul css={navCss}>
        <li>
          <AniLink fade to="/">
            Home
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/about">
            About
          </AniLink>
        </li>
        <li>
          <a href={resume}>
            Resume
          </a>
        </li>
        <li>
          <AniLink fade to="/projects">
            Projects
          </AniLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
