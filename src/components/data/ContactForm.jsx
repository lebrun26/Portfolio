// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_i80x9ro",
        "template_2jtpmo5",
        formData,
        "gPw-OVN7dqgKBeodm"
      )
      .then(() => {
        setStatusMessage("Votre message a été envoyé avec succès !");
        setIsError(false);
      })
      .catch(() => {
        setStatusMessage(
          "Une erreur est survenue lors de l'envoi du message, veuillez réessayer."
        );
        setIsError(true);
      });

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <h3 className="form-group-title">Formulaire de contact</h3>
          <label htmlFor="firstName" className="firstName_font">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Votre prénom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="lastName_font">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName" className="companyName_font">
            Nom de société
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Nom de votre société"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="phoneNumber_font">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="message_font">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>

      {/* Affichage du message de statut, avec couleur différente selon l'erreur */}
      {statusMessage && (
        <p className={`status-message ${isError ? "error" : "success"}`}>
          {statusMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
