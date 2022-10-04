import React, { useState, useEffect } from "react";
import "./Test.css";

import menuIcon from "./images/icons/menu.png";
import xIcon from "./images/icons/x.png";

function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

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
  }, []);

  window.addEventListener("resize", checkShowButton);

  return (
    <div className="Test">
      <nav className="my-nav">
        <span>JMSistemas</span>
        {showButton ? <img onClick={toggleMenu} src={isMenuOpen ? xIcon : menuIcon} className="btn-menu" /> : null}
        <div className={isMenuOpen ? "my-nav-menu open" : "my-nav-menu"}>
          <a>
            <span>Link 1</span>
          </a>
          <a>Link 2</a>
          <a>Link 3</a>
          <a>Link 4</a>
        </div>
      </nav>
      <div className="content"></div>
      <div>
        <span>Footer legal</span>
      </div>
    </div>
  );
}

export default Test;
