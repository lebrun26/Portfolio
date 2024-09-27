/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Cards_presentation = ({ title, text }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <div
      className="card__presentation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`card__presentation__inner ${flipped ? "flipped" : ""}`}>
        {/* Face avant de la carte */}
        <div className="card__presentation__inner__front">
          <h2 className="title__cards">{title}</h2>
        </div>
        {/* Face arrière de la carte */}
        <div className="card__presentation__inner__back">
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards_presentation;
