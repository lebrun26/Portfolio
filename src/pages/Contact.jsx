// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/data/ContactForm";

const Contact = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>

      <main className="main__container">
        <h2>Contact</h2>
        <div className="main__container__contact__paragraphe">
          <p className="main__container__contact__paragraphe__police">
            Je tenez à vous remercier pour votre attention et votre lecture.
          </p>
          <p className="main__container__contact__paragraphe__police">
            Si mon profil vous intérresse, je reste à votre disposition pour
            tout renseignement supplémentaire.
          </p>{" "}
          <p className="main__container__contact__paragraphe__police">
            {" "}
            Vous pouvez également me contacter via le formulaire juste en
            dessous et je vous répondrez dans les plus brefs délais.
          </p>
        </div>
        <div className="main__container__contact__form">
          <ContactForm />
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
