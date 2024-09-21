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
        <h2 className="main__title">Présentation</h2>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Presentation;
