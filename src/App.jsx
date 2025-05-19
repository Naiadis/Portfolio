import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import NaiadisCarousel from "./components/NaiadisCarousel";
import LogoSection from "./components/LogoSection";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ColorPaletteSection from "./components/ColorPaletteSection";
import PackagingSection from "./components/PackagingSection";

function App() {
  // Setup particle movement variables on component mount
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      // Set random movement direction for each particle
      const x = Math.random() * 30 - 15;
      const y = Math.random() * 30 - 15;
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
        <section className="page-content">
          <NaiadisCarousel />
        </section>
        <section className="page-content">
          <LogoSection />
        </section>
        <section className="page-content">
          <ColorPaletteSection />
        </section>
        <section className="page-content">
          <PackagingSection />
        </section>
      </BackgroundWrapper>
    </main>
  );
}

export default App;
