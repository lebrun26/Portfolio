// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ title, logo }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={logo} alt="logo" className="card__logo" />
    </div>
  );
};

export default Card;
