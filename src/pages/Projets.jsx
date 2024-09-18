// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projets = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <main className="main__container">{/* Ton contenu ici */}</main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Projets;
