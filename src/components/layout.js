/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import Header from "./Header";
import mountains from "../assets/images/SVG/mountains.svg";
import cloud1 from "../assets/images/SVG/cloud1.svg";
import cloud2 from "../assets/images/SVG/cloud2.svg";
import cloud3 from "../assets/images/SVG/cloud3.svg";

const layoutCss = css`
  background: #e4f2f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background: linear-gradient(363deg, #297591 19%, #101);
    color: #ddd;
`;

// reset css
const globalStylesCss = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700');
  * {
    color: #fff;
    font-family: 'Roboto';
    font-weight: 300;
    margin: 0;
    padding: 0;
  }
  body {
    overflow: hidden;
  }
  a {
    color: #333;
  }
`;

const cloudsCss = css`
  @keyframes moveleft {
    0% {
      right: 0;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      right: 60%;
      opacity: 0;
    }
  }
  animation: moveleft 15s linear infinite;
  position: absolute;
  max-width: 300px;

  @media (max-width: 450px) {
    max-width: 90px;
  }
`;

const offset1 = css`
  ${cloudsCss};
  bottom: 30px;
  animation-delay: -1s;
`;

const offset2 = css`
  ${cloudsCss};
  bottom: 10px;
  max-width: 200px;
  animation: moveleft 12s linear infinite;
`;

const offset3 = css`
  ${cloudsCss};
  bottom: 50px;
  margin-left: 50%;
  animation-delay: -2.5s;
`;

const mountainCss = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;

  img {
    position: relative;
    bottom: -20px;
    left: 140px;
    max-height: 70vh;
  }

  @media (max-width: 450px) {
    img {
      left: 0;
      right: 0;
      width: 500px;
    }
  }
`;

const childrenCss = css`
  display: inherit;
  flex-wrap: wrap;
  margin-top: -10%;
  z-index: 2;

  @media (max-width: 600px) {
    display: block;
    margin: 0 auto;
  }
`;

const starsCss = css`
  @keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
  > div {
    animation: blink 5s ease-in infinite;

    &:nth-child(3n) {
      animation-delay: 2.1s;
    }
    &:nth-child(3n) {
      animation-delay: 1.1s;
    }
  }
`;

const generateStars = () => {
  let stars = [];
  for(let i = 0; i < 20; i++) {
    stars.push(<div css={css`
      color: #fff;
      font-size: ${Math.random() * 50 + 10}px;
      position: absolute;
      top: ${Math.random() * 60 + 10}vh;
      left: ${Math.random() * 100}vw;
    `}>.</div>);
  }
  return <div css={starsCss}>{stars}</div>;
}

const Layout = ({ children }) => {
  return (
    <div css={layoutCss}>
      <Global styles={globalStylesCss} />
      {generateStars()}
      <Header />
      <img alt="floating clouds" css={offset1} src={cloud1} />
      <img alt="floating clouds" css={offset2} src={cloud2} />
      <img alt="floating clouds" css={offset3} src={cloud3} />
      <div css={mountainCss}><img alt="mountain" src={mountains} /></div>
      <img alt="floating clouds" css={offset2} src={cloud2} />
      <img alt="floating clouds" css={offset1} src={cloud3} />
      <div css={childrenCss}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
