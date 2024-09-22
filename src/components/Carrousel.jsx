/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import iconGithub from "../assets/logo_github2.png";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__content">
        <div className="carousel__header">
          <h2 className="carousel__text">{items[currentIndex].text}</h2>
          <a
            href={items[currentIndex].github}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel__github"
          >
            <img src={iconGithub} alt="GitHub Logo" />
          </a>
        </div>
        <img src={items[currentIndex].image} alt="Carousel" />
      </div>
      <button className="carousel__button left" onClick={prevSlide}>
        &#9664; {/* Fleche gauche */}
      </button>
      <button className="carousel__button right" onClick={nextSlide}>
        &#9654; {/* Fleche droite */}
      </button>
    </div>
  );
};

export default Carousel;
