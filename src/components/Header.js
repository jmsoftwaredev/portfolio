import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import { animateScroll as scroll } from "react-scroll";

import menuIcon from "../images/icons/menu.png";
import xIcon from "../images/icons/x.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const goToTop = () => {
    closeMenu();
    scroll.scrollToTop();
  };

  const contactUs = () => {
    closeMenu();
    scroll.scrollToBottom();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const checkShowButton = () => {
    if (window.innerWidth <= 960) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    checkShowButton();

    window.addEventListener("resize", checkShowButton);
    return () => {
      window.removeEventListener("resize", checkShowButton);
    };
  }, []);

  return (
    <div className="header">
      <div className="left-container">
        <div className="header-logo" onClick={goToTop}>
          <span className="title">JM</span>
          <span className="title title-color">Sistemas</span>
        </div>
        {showButton ? <img onClick={toggleMenu} src={isMenuOpen ? xIcon : menuIcon} className="btn-menu" /> : null}
      </div>
      <div className={isMenuOpen ? "right-container open" : "right-container"}>
        <HeaderLink name="PROJETOS" anchor="projects" onClick={closeMenu} />
        <HeaderLink name="TECNOLOGIAS" anchor="techs" onClick={closeMenu} />
        <HeaderLink name="SERVIÇOS" anchor="services" onClick={closeMenu} />
        <HeaderLink name="SOBRE NÓS" anchor="about" onClick={closeMenu} />
        <button className="btn-contact" onClick={contactUs}>
          Contate-nos
        </button>
      </div>
    </div>
  );
}

export default Header;
