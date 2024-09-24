// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Header__container">
      <NavLink to="/">
        <h1>Patrick Le Brun</h1>
      </NavLink>

      {/* Bouton Burger */}
      <div
        className={`burger__menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Menu */}
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={toggleMenu}>
          <span>Accueil</span>
        </NavLink>
        <NavLink to="/presentation" onClick={toggleMenu}>
          <span>Présentation</span>
        </NavLink>
        <NavLink to="/projets" onClick={toggleMenu}>
          <span>Projets</span>
        </NavLink>
        <NavLink to="/contact" onClick={toggleMenu}>
          <span>Contact</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
