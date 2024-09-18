// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header__container">
      <NavLink to="/">
        <h1>Patrick Le Brun</h1>
      </NavLink>

      <nav>
        <NavLink to="/">
          <span>Accueil</span>
        </NavLink>
        <NavLink to="/presentation">
          <span>Présentation</span>
        </NavLink>
        <NavLink to="/projets">
          <span>Projets</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
