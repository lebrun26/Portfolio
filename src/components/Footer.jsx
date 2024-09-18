// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer__name">
        <p>Patrick Le Brun</p>
      </div>
      <div className="footer__copyright">
        <p>© Conçus par Patrick Le Brun</p>
      </div>
      <div className="footer__info">
        <p>
          Email:{" "}
          <a href="mailto:lebrun.patrickdev@gmail.com?subject=Contact%20via%20site&body=Bonjour">
            lebrun.patrickdev@gmail.com
          </a>
        </p>
        <p>Téléphone: 06.74.15.98.40</p>
      </div>
    </>
  );
};

export default Footer;
