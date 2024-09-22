/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logoGithub from "../assets/logo_github.png";
import Carousel from "../components/Carrousel";
import carrouselData from "../components/data/carrouselData.json";

const Projets = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(carrouselData);
  }, []);

  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <main className="main__container">
        <h2>Mes Projets</h2>
        <div className="main__container__intro">
          <p>
            Durant ma formation, nous avons appris à utiliser et travailler avec
            GitHub qui est l'outil N°1 pour les entreprises afin de travailler
            en équipe, suivis de projet, et stockage de projet.
          </p>
          <div className="main__container__intro__github">
            <p>
              Voici le lien de mon GitHub contenant l'intégralité de mes projets
              éffectué pendant ma formation
            </p>
            <a href="https://github.com/lebrun26" target="_blank">
              <img src={logoGithub} alt="Github représentation" />
            </a>
          </div>
        </div>
        {items.length > 0 && <Carousel items={items} />}
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Projets;
