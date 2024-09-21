// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import logoHtml from "../assets/logo_html.png";
import logoCss from "../assets/logo_css.png";
import logoSass from "../assets/logo_sass.png";
import logoJs from "../assets/logo_js.png";
import logoReact from "../assets/logo_react.png";
import logoRedux from "../assets/logo_redux.png";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main className="main__container">
        <h2 className={`title__home ${animate ? "animate-h2" : ""}`}>
          Bienvenue sur le Portfolio de Patrick Le Brun
        </h2>

        <p className="first__paragraphe">
          Étudiant chez OpenClassRooms, voici les technologies apprises pendant
          ma formation.
        </p>
        <div className="container__techno">
          <Card title="HTML" logo={logoHtml} />
          <Card title="CSS" logo={logoCss} />
          <Card title="SASS" logo={logoSass} />
          <Card title="JavaScript" logo={logoJs} />
          <Card title="React" logo={logoReact} />
          <Card title="Redux" logo={logoRedux} />
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
