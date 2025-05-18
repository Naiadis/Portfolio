import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import NaiadisCarousel from "./components/NaiadisCarousel";
import LogoSection from "./components/LogoSection";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ColorPaletteSection from "./components/ColorPaletteSection";

function App() {
  // Setup particle movement variables on component mount
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      // Set random movement direction for each particle
      const x = Math.random() * 30 - 15; // -15px to 15px
      const y = Math.random() * 30 - 15; // -15px to 15px
      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
    });
  }, []);

  return (
    <main>
      <section className="hero-section">
        <HeroSection />
      </section>
      <BackgroundWrapper>
        {/* <div className="ambigram-container">
          <img src={ambigram} alt="Ambigram" className="ambigram-glow" />
        </div> */}
        <section className="page-content">
          <NaiadisCarousel />
        </section>
        <section className="page-content">
          <LogoSection />
        </section>
        <section className="page-content">
          <ColorPaletteSection />
        </section>
      </BackgroundWrapper>
    </main>
  );
}

export default App;
