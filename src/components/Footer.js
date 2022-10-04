import React, { useState } from "react";
import "./Footer.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Parallax } from "react-parallax";

function Footer() {
  const [validated, setValidated] = useState(false);

  const handleSubmitForm = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Parallax bgImage={require("../images/city5.jpg")} strength={300} blur={5}>
      <div className="footer-container">
        <span className="contact-title">Contato</span>
        <span className="contact-subtitle">Envie um email para nós</span>
        <Form className="contact-form" validated={validated} onSubmit={handleSubmitForm}>
          <Form.Group>
            <Form.Label>Seu email</Form.Label>
            <Form.Control required type="email" placeholder="email@exemplo.com" />
            <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sua mensagem</Form.Label>
            <Form.Control required as="textarea" rows="4" placeholder="Escreva sua mensagem aqui" className="form-textarea"/>
            <Form.Control.Feedback type="invalid">Por favor insira sua mensagem</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="float-right">
            Enviar email
          </Button>
        </Form>
        <span className="footer-small-text">
          Ícones por<a href="https://icons8.com/">icons8</a>
        </span>
      </div>
    </Parallax>
  );
}

export default Footer;
