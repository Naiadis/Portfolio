import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import ambigram from "./assets/Ambigram.svg";
import CornerVines from "./assets/CornerVines.svg";
import FloatingParticles from "./components/FloatingParticles";

function App() {
  // Setup particle movement variables on component mount
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      // Set random movement direction for each particle
      const x = Math.random() * 30 - 15; // -15px to 15px
      const y = Math.random() * 30 - 15; // -15px to 15px
      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
    });
  }, []);

  return (
    <main>
      <HeroSection />
      <div className="page-content">
        <FloatingParticles />
        <div className="ambigram-container">
          <img src={ambigram} alt="Ambigram" className="ambigram-glow" />
        </div>
        <section className="brand-intro">
          {/* Corner vines */}
          <img src={CornerVines} alt="" className="vine vine-tl" />
          <img src={CornerVines} alt="" className="vine vine-tr" />
          <img src={CornerVines} alt="" className="vine vine-bl" />
          <img src={CornerVines} alt="" className="vine vine-br" />
          <p className="brand-text">
            In a forest untouched by time, Naiadis was born from the hands of
            those who whisper to trees and sing to stars. Every item is an echo
            of elven magic — carved, brewed, or cast in ritual. Whether a candle
            to guide your path, a rune to protect your spirit, or a piece of
            jewelry bound in memory, Naiadis offers not products, but relics.
            Each piece is placed with care into a vessel of velvet and wood,
            where a silent spell seals it for the soul it seeks.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;