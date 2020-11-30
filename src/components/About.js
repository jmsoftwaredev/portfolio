import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-container">
        <span className="about-title">SOBRE NÓS</span>
        <div className="person-container">
          <div className="person sidneiju">
            <div className="person-info">
              <span className="person-name">Sidnei Junior</span>
              <span className="person-details">Analista e desenvolvedor de sistemas desde 2015</span>
              {/* TODO: Usar uma biblioteca de ícones */}
              <div className="icon-buttons-container">
                <a href="https://github.com/sidneiju/">
                  <img src={require("../images/icons8_github.svg")} height="24" width="24" />
                </a>
                <a href="https://www.linkedin.com/in/sidneijunioranastacio/">
                  <img src={require("../images/icons8_linkedin.svg")} height="24" width="24" />
                </a>
                <a href="https://www.instagram.com/sidnei_junior9/">
                  <img src={require("../images/icons8_instagram.svg")} height="24" width="24" />
                </a>
              </div>
            </div>
          </div>
          <div className="person matugas">
            <div className="person-info">
              <span className="person-name">Matheus Antonio</span>
              <span className="person-details">Analista e desenvolvedor de sistemas desde 2020</span>
              {/* TODO: Usar uma biblioteca de ícones */}
              <div className="icon-buttons-container">
                <a href="https://github.com/matugas">
                  <img src={require("../images/icons8_github.svg")} height="24" width="24" />
                </a>
                <a href="https://www.linkedin.com/in/matheusanastacio/">
                  <img src={require("../images/icons8_linkedin.svg")} height="24" width="24" />
                </a>
                <a href="https://www.instagram.com/matheusanastacio/">
                  <img src={require("../images/icons8_instagram.svg")} height="24" width="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
