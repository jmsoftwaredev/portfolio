import React from "react";
import Particles from "react-particles-js";

function MyParticles() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
          },
          size: {
            value: 1,
          },
        }
      }}
      style={{
        position: "absolute",
        zIndex: "-1",
        backgroundColor: "#16181D",
        maxWidth: "100%"
      }}
      width="100vw"
      height="100vh"
    />
  );
}

export default MyParticles;
