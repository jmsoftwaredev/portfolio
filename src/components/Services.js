import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-container" id="services">
      <span className="services-title">SERVIÇOS</span>
      <div className="service-images-container">
        <Service
          src={require("../images/services/web.png")}
          title="Web"
          details="Sistemas desenvolvidos para serem operados utilizando um navegador com conexão a internet (Chrome, Safari, Opera, Edge, etc)"
        />
        <Service
          src={require("../images/services/app.png")}
          title="App Android/iOS"
          details="Aplicativos nativos para smartphones, disponibilizados na PlayStore para Android e na AppStore para iPhones"
        />
        <Service
          src={require("../images/services/desktop.png")}
          title="Desktop"
          details="Esse tipo de sistema é instalado em um computador e funciona sem conexão a internet e serve para operações que precisam de mais processamento"
        />
      </div>
    </div>
  );
}

function Service(props) {
  return (
    <div className="service-container">
      <img className="service-image" src={props.src} />
      <div className="service-info">
        <span className="service-info-title">{props.title}</span>
        <span className="service-info-details">{props.details}</span>
      </div>
    </div>
  );
}

export default Services;
