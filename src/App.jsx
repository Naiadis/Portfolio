import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import ambigram from "./assets/Ambigram.svg";
import FloatingParticles from "./components/FloatingParticles";
import NaiadisCarousel from "./components/NaiadisCarousel";

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
      <section className="page-content">
        <FloatingParticles />
        <div className="ambigram-container">
          <img src={ambigram} alt="Ambigram" className="ambigram-glow" />
        </div>
        <NaiadisCarousel />
        <div className="particles-bg">
          <div
            className="particle-strong"
            style={{
              left: "12vw",
              top: "22vh",
              width: "4px",
              height: "4px",
              opacity: 0.85,
              animationDuration: "7s",
              animationDelay: "0s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "18vw",
              top: "28vh",
              width: "3px",
              height: "3px",
              opacity: 0.7,
              animationDuration: "8s",
              animationDelay: "1s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "25vw",
              top: "35vh",
              width: "2.5px",
              height: "2.5px",
              opacity: 0.8,
              animationDuration: "6s",
              animationDelay: "2s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "32vw",
              top: "40vh",
              width: "3.5px",
              height: "3.5px",
              opacity: 0.9,
              animationDuration: "7.5s",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "40vw",
              top: "30vh",
              width: "2px",
              height: "2px",
              opacity: 0.6,
              animationDuration: "9s",
              animationDelay: "1.2s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "48vw",
              top: "38vh",
              width: "4px",
              height: "4px",
              opacity: 0.8,
              animationDuration: "8.5s",
              animationDelay: "0.8s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "55vw",
              top: "25vh",
              width: "3px",
              height: "3px",
              opacity: 0.7,
              animationDuration: "7.2s",
              animationDelay: "1.7s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "62vw",
              top: "32vh",
              width: "2.5px",
              height: "2.5px",
              opacity: 0.85,
              animationDuration: "6.8s",
              animationDelay: "2.3s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "70vw",
              top: "28vh",
              width: "3.5px",
              height: "3.5px",
              opacity: 0.8,
              animationDuration: "7.8s",
              animationDelay: "0.3s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "78vw",
              top: "36vh",
              width: "2px",
              height: "2px",
              opacity: 0.6,
              animationDuration: "8.2s",
              animationDelay: "1.1s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "85vw",
              top: "24vh",
              width: "4px",
              height: "4px",
              opacity: 0.9,
              animationDuration: "7.3s",
              animationDelay: "0.6s",
            }}
          />
          <div
            className="particle-strong"
            style={{
              left: "92vw",
              top: "30vh",
              width: "3px",
              height: "3px",
              opacity: 0.7,
              animationDuration: "8.7s",
              animationDelay: "1.4s",
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
