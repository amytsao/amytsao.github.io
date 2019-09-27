/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
    top: 0;
    right: 0;
    width: auto;
    padding: 0;

    li {
      padding: 5px;
    }
  }
`;

const Header = () => {
    return (
      <header>
        <ul css={navCss}>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href={resume}>
              Resume
            </a>
          </li>
          <li>
            <a href="/projects">
              Projects
            </a>
          </li>
        </ul>
      </header>
    );
}

export default Header;
