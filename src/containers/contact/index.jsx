import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contacto"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__cards">
        <a
          href="https://wa.me/59176346429"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="contact__card"
          style={{ animationDelay: "0s" }}
        >
          <FaWhatsapp className="contact__icon" />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://www.linkedin.com/in/burgosjordan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="contact__card"
          style={{ animationDelay: "0.2s" }}
        >
          <FaLinkedin className="contact__icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://instagram.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="contact__card"
          style={{ animationDelay: "0.4s" }}
        >
          <FaInstagram className="contact__icon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com/tu-pagina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="contact__card"
          style={{ animationDelay: "0.6s" }}
        >
          <FaFacebook className="contact__icon" />
          <span>Facebook</span>
        </a>

        <a
          href="mailto:burgosjordan194@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="contact__card"
          style={{ animationDelay: "0.8s" }}
        >
          <BsInfoCircleFill className="contact__icon" />
          <span>Correo Electronico</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
