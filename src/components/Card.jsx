// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Card.scss"; // Importation des styles

const Card = ({ title, logo }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={logo} alt="logo" className="card__logo" />
    </div>
  );
};

export default Card;
