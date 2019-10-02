/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  FaEnvelopeSquare,
  FaInstagram,
  FaGithubAlt,
  FaLinkedinIn
} from "react-icons/fa";

const socialIcons = css`
  text-align: center;
  @keyframes loading-dots {
    50% {
      opacity: 0.2;
      transform: scale(0.75);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  a {
    display: inline-block;
    height: 2.5rem;
    width: 2.5rem;
    color: #f1f0cf;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:active,
    &:focus,
    &:hover {
      color: #377;
      animation: loading-dots 1.3s ease-out infinite;
    }
  }
`;

const Footer = () => {
  return (
        <ul css={socialIcons}>
          <a
            href="https://www.linkedin.com/in/amy-tsao-aaab51a8/"
            alt="github"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/amytsao" alt="github">
            <FaGithubAlt />
          </a>
          <a href="https://www.instagram.com/ariie_tea/" alt="instagram">
            <FaInstagram />
          </a>
          <a href="mailto:amy.tsao227@gmail.com" alt="email">
            <FaEnvelopeSquare />
          </a>
        </ul>
  );
}

export default Footer;
