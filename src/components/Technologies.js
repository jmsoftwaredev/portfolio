import React from "react";
import "./Technologies.css";

function Technologies() {
  return (
    <div className="techs-container" id="techs">
      <span className="techs-title">Tecnologias</span>
      <span className="techs-subtitle">Um pouco sobre as ferramentas que utilizamos no nosso trabalho</span>
      <div className="tech-images-container">
        <Tech src={require("../images/techs/react.png")} title="React" details="Tecnologia nova e inovadora para desenvolvimento de aplicações web" />
        <Tech src={require("../images/techs/angular.png")} title="Angular" details="Framework da Google consolidado no mercado para desenvolvimento aplicações web"  />
        <Tech src={require("../images/techs/electron.png")} title="Electron" details="Ferramenta para distribuir softwares para Desktops (Windows, Linux, MacOS, etc)"  />
        <Tech src={require("../images/techs/node.png")} title="Node.JS" details="Utilizando essa tecnologia, temos um sistema sólido e facilmente escalável para a parte do servidor"  />
        <Tech src={require("../images/techs/java.png")} title="Java" details="Linguagem de programação utilizada para alguns sistemas considerados legado"  />
      </div>
    </div>
  );
}

function Tech(props) {
  return (
    <div className="tech-container">
      <img className="tech-image" src={props.src} />
      <div className="tech-info">
        <span className="tech-info-title">{props.title}</span>
        <span className="tech-info-details">{props.details}</span>
      </div>
    </div>
  );
}

export default Technologies;
