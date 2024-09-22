/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cards_presentation from "../components/Cards_presentation";

const Presentation = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <main className="main__container">
        <h2 className="main__container__title">Présentation</h2>
        {/* Parcours */}
        <Cards_presentation
          title="Mon parcours"
          text={
            <div className="main__container__parcours">
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
              <p className="main__container__parcours__paragraphe">
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
                Chauffeur / Livreur dans le transport de colis pour les
                particuliers
              </p>
              <p className="main__container__parcours__paragraphe">
                <span className="main__container__parcours__paragraphe__style__date">
                  Août 2023 :
                </span>{" "}
                Chauffeur / Livreur dans le transport de produits d'entretien
                pour les professionnels
              </p>
              <p className="main__container__parcours__paragraphe">
                <span className="main__container__parcours__paragraphe__style__date">
                  Décembre 2023 :
                </span>{" "}
                Début de formation Intégrateur Web chez OpenClassRooms
              </p>
            </div>
          }
        />
        {/* Formation OpenClassRooms */}
        <Cards_presentation
          title="Ma formation"
          text={
            <div className="main__container__formation">
              <p className="main__container__formation__paragraphe">
                Ma formation d'intégrateur web chez OpenClassRooms a été très
                instructive. Avec de petites bases uniquement en HTML et CSS,
                grâce à cette formation, j'ai réussi à atteindre le premier
                niveau d'exigence et d'apprentissage que je souhaitais.{" "}
              </p>
              <p className="main__container__formation__paragraphe">
                {" "}
                La première partie de la formation nous a appris le langage HTML
                et CSS. Suite à cela, j'ai fait mes premiers pas sur du
                JavaScript pure. Ensuite j'ai appris ma première bibliothèque,
                le "React".
              </p>
              <p className="main__container__formation__paragraphe">
                C'est à ce moment précis que j'ai vraiment pris du plaisir à
                développer. Et la dernière chose apprise, "Redux" outils très
                importants et surtout très puissants. Dans cette formation, ce
                qu'il y a de bien, c'est le fait d'avoir vraiment des projets
                qui nous professionnalisent, nous mettent vraiment en conditions
                pour nos futures entreprises.{" "}
              </p>
              <p className="main__container__formation__paragraphe">
                {" "}
                J'ai eu aussi l'occasion d'être formé sur l'utilisation de Figma
                et la gestion de projet avec la méthode "Agile".
              </p>
            </div>
          }
        />

        {/* Mon future */}
        <Cards_presentation
          title="Mon future"
          text={
            <div className="main__container__future">
              <p className="main__container__future__paragraphe">
                Pour mon futur, mon objectif final est de devenir "Développeur
                en intelligence artificielle".{" "}
              </p>{" "}
              <p className="main__container__future__paragraphe">
                {" "}
                C'est pour cela que, suite à l'obtention de mon diplôme,
                j'aimerais trouver une alternance en tant que développeur full
                stack avec du Pyton en backend.{" "}
              </p>{" "}
              <p className="main__container__future__paragraphe">
                {" "}
                Afin d'avoir une base au niveau du langage de programmation pour
                les IA.
              </p>
            </div>
          }
        />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Presentation;
