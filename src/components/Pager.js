/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const pagerCss = css`
  position: absolute;
  left: 0;
  top: 25%;
  div {
    background: #377;
    color: #fff;
    margin-bottom: 5px;
    padding: 10px;
    transition: all 0.5s ease-out;

    &:active,
    &:focus,
    &:hover {
      background: #fff;
      color: #377;
      cursor: pointer;
    }
  }

  @media(max-width: 820px) {
    position: unset;
    top: auto;
    left: auto;
  }
`;

const Pager = ({ count, selected, cards, onSelect }) => {
  let boxes = [];
  for (let i = 0; i < count; i++) {
    boxes.push(
      <div
        onClick={() => {
          onSelect(i);
        }}
        className={selected === i ? "box selected-box" : "box"}
      >
        {cards[i].title}
      </div>
    );
  }
  return <div css={pagerCss}>{boxes}</div>;
};

export default Pager;
