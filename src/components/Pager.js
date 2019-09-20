import React from "react";

const Pager = ({ count, selected, cards, onSelect, className }) => {
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
  return <div className={className}>{boxes}</div>;
};

export default Pager;
