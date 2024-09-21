// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Presentation = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <main className="main__container">
        <h2 className="main__container__title">Présentation</h2>

        <div className="main__container__parcours">
          <h3 className="main__container__parcours__title">Mon parcours :</h3>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Juillet 2016 :
            </span>{" "}
            Obtention du Bac Pro Maintenance des équipements industriels
          </p>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Janvier 2017 :
            </span>{" "}
            Élève Sous-Officier de la Marine Nationale
          </p>
          <p>
            <span className="main__container__parcours__paragraphe__style__date">
              Septembre 2018 :
            </span>{" "}
            Étudiant - Sciences et techniques des activités physiques et
            sportives
          </p>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Septembre 2019 :
            </span>{" "}
            Assistant d'éducation dans un collège, lycée
          </p>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Juillet 2021 :
            </span>{" "}
            Chauffeur / Livreur dans le transport de colis pour les particuliers
          </p>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Août 2023 :
            </span>{" "}
            Chauffeur / Livreur dans le transport de produits d'entretien pour
            les professionnels
          </p>
          <p className="main__container__parcours__paragraphe">
            <span className="main__container__parcours__paragraphe__style__date">
              Décembre 2023 :
            </span>{" "}
            Début de formation Intégrateur Web chez OpenClassRooms
          </p>
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Presentation;
