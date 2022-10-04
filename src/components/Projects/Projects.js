import React from "react";
import "./Projects.css";
import ProjectItem from "./ProjectItem";
import { Parallax } from "react-parallax";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <span className="projects-title">Projetos</span>
      <span className="projects-subtitle">Imagens e descrições dos sistemas desenvolvidos por nós</span>
      <ProjectItem title="Global Software" details="Um software simples e completo para atender as necessidades de gerenciamento de uma empresa, feito para Desktop, é um programa rápido e eficiente." moreDetails="Elimine aquela papelada indesejada e cadastre tudo pelo computador com muita segurança através de um backup diário dos arquivos." image={require("../../images/gbsoftware-montage.png")} />
      <div className="nahora-container">
        <img className="nahora-image" src={require("../../images/nahora-montage.png")} alt="NaHoraLogo" />
        <div className="nahora-info">
          <span className="project-title">NaHora</span>
          <span className="project-details">&emsp;Um sistema de gerenciamento de comércio focado em facilitar seu trabalho, feito para Web, funciona perfeitamente tanto em computadores como em celulares ou tablets, podendo até ser usado como um aplicativo PWA.</span>
          <span className="project-details">&emsp;Chega de ficar com dúvidas sobre o quanto vendeu, chega de ficar perdido ao anotar pedidos, checar estoque e passar para produção! Agora você pode cadastrar um novo pedido facilmente por qualquer dispositivo, imprimir utilizando um computador a via para produção (por exemplo, passar o pedido para a cozinha fazer) e também imprimir a via do cliente! Você tem acesso a quais produtos mais vendem, controle do estoque e muito mais!</span>
          <button className="button-more">Saiba Mais</button>
        </div>
      </div>
      <ProjectItem direction="down" title="App para Academias" details="Um aplicativo simples e completo para atender as necessidades dos clientes de uma academia, feito para Smartphones, é um programa que facilita a organização dos treinos." moreDetails="Ficha de treino é passado! Agora o seu treino inteiro está na palma de sua mão e facilmente ajustável! Conta também com a carga para cada exercício." image={require("../../images/academia-montage.png")} />
    </div>
  );
}

export default Projects;
