import React from "react";
import "./Header.css";

import HeaderLink from "./HeaderLink";
import { animateScroll as scroll } from "react-scroll";

function Header() {

  const contactUs = () => {
    scroll.scrollToBottom();
  }

  return (
    <div className="header">
      <div className="left-container">
        <span className="title">JM</span>
        <span className="title title-color">Sistemas</span>
      </div>
      <div className="right-container">
        <HeaderLink name="PROJETOS" anchor="projects"/>
        <HeaderLink name="TECNOLOGIAS" anchor="techs"/>
        <HeaderLink name="SERVIÇOS" anchor="services"/>
        <HeaderLink name="SOBRE NÓS" anchor="about"/>
        <button className="btn-contact" onClick={contactUs}>CONTATE-NOS</button>
      </div>
    </div>
  );
}

export default Header;
