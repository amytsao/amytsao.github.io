import { animated } from "react-spring";
/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const cardCss = css`
  padding: 0 20px;
  position: absolute;
  top: 20%;
  left: 30%;

  @media(max-width: 820px) {
    margin: 20px auto;
    top: auto;
    left: auto;
    padding-left: 0;
    max-width: 230px;
  }
`;

const Card = ({ children, style }) => {
  return (
    <animated.div
      css={cardCss}
      style={{
        ...style
      }}
    >
      {children}
    </animated.div>
  );
};

export default Card;
