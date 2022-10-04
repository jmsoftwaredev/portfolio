import React, { useState, useEffect } from "react";
import MyParticles from "./components/MyParticles";
import Header from "./components/Header";
import Title from "./components/Title";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import "./App.css";
import "typeface-roboto";
import "typeface-montserrat";
import "pathseg";
import { Parallax } from "react-parallax";

function App() {
  const [parallaxStrength, setParallaxStrength] = useState(300);

  const checkScreenSize = () => {
    if (window.innerWidth <= 960) {
      setParallaxStrength(100);
    } else {
      setParallaxStrength(300);
    }
  };
  
  useEffect(() => {
    checkScreenSize();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <MyParticles /> */}
      <Parallax bgImage={require("./images/office2.jpg")} strength={parallaxStrength} blur={0}>
        <Title />
      </Parallax>
      <Projects />
      <Technologies />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
