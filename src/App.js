import React from "react";
import MyParticles from "./components/MyParticles";
import Header from "./components/Header";
import Title from "./components/Title";
import Projects from "./components/Projects/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import "typeface-roboto";

function App() {
  return (
    <div className="App">
      <Header />
      <MyParticles />
      <Title />
      <Projects />
      <Technologies />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
