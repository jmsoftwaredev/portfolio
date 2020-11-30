import React, { useState } from "react";
import "./Footer.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Footer() {
  const [validated, setValidated] = useState(false);

  const handleSubmitForm = (event) => {
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <div className="footer-container">
      <span className="contact-title">CONTATO</span>
      <span>Envie um email para nós</span>
      <Form className="contact-form" validated={validated} onSubmit={handleSubmitForm}>
        <Form.Group>
          <Form.Label>Seu email</Form.Label>
          <Form.Control required type="email" placeholder="email@exemplo.com"/>
          <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Sua mensagem</Form.Label>
          <Form.Control required as="textarea" rows="4" placeholder="Escreva sua mensagem aqui"/>
          <Form.Control.Feedback type="invalid">
              Por favor insira sua mensagem
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" className="float-right">Enviar email</Button>
      </Form>
      <span className="footer-small-text">Ícones por<a href="https://icons8.com/">icons8</a></span>
    </div>
  );
}

export default Footer;
