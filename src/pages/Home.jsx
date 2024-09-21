// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

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
        <h2 className={animate ? "animate-h2" : ""}>
          Bienvenue sur le Portfolio de Patrick Le Brun
        </h2>

        <p className="first__paragraphe">
          Étudiant chez OpenClassRooms, voici les technologies apprises pendant
          ma formation.
        </p>
        <div className="container__techno">
          <Card title="HTML" logo="logoHtml" />
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
