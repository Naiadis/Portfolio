import React from "react";
import HeroSection from "./components/HeroSection";
import "../src/index.css";

function App() {
  return (
    <main>
      <HeroSection />

      <section
        className="brand-intro"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 1rem 2rem 1rem",
          background: "#4c2c16;",
        }}
      >
        <p
          style={{
            fontFamily: '"RaskalOner Trial", sans-serif',
            fontSize: "1.2rem",
            color: "#fff",
            letterSpacing: "0.01em",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          In a forest untouched by time, Naiadis was born from the hands of
          those who whisper to trees and sing to stars. Every item is an echo of
          elven magic — carved, brewed, or cast in ritual. Whether a candle to
          guide your path, a rune to protect your spirit, or a piece of jewelry
          bound in memory, Naiadis offers not products, but relics. Each piece
          is placed with care into a vessel of velvet and wood, where a silent
          spell seals it for the soul it seeks.
        </p>
      </section>
    </main>
  );
}

export default App;
