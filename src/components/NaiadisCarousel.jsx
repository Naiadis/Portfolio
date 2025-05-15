import React, { useState } from "react";
import CornerVines from "../assets/CornerVines.svg";
import LeafArrow from "../assets/LeafArrow.svg";
import "../index.css";

const slides = [
  {
    text: (
      <>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          The Story of Naiadis
        </span>
        In a forest untouched by time, Naiadis was born from the hands of those
        who whisper to trees and sing to stars. Every item is an echo of elven
        magic — carved, brewed, or cast in ritual. Whether a candle to guide
        your path, a rune to protect your spirit, or a piece of jewelry bound in
        memory, Naiadis offers not products, but relics. Each piece is placed
        with care into a vessel of velvet and wood, where a silent spell seals
        it for the soul it seeks.
      </>
    ),
  },
  {
    text: (
      <>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Naiadis is...
        </span>
        <br />
        Mystical, Handcrafted, Ritualistic,
        <br />
        Earth-rooted and Protective.
      </>
    ),
  },
  {
    text: (
      <>
        Naiadis is a fantasy apothecary. A store that feels like a living part
        of an enchanted forest, run by unseen elven hands. It doesn't just sell
        objects; it offers ritual tools and sacred vessels like candles, herbs,
        jewelry, and runes, all infused with intention.
        <br />
        <br />
        Every item is placed into the carefully crafted package to feel like it
        was passed down from a secret world. The wooden box, the vines, the
        velvet interior… all speak of a protective energy, as though a spell is
        cast the moment the lid is closed.
      </>
    ),
  },
];

export default function NaiadisCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="brand-intro carousel-box">
      {/* Corner vines */}
      <img src={CornerVines} alt="" className="vine vine-tl" />
      <img src={CornerVines} alt="" className="vine vine-tr" />
      <img src={CornerVines} alt="" className="vine vine-bl" />
      <img src={CornerVines} alt="" className="vine vine-br" />
      <div className="carousel-content">{slides[index].text}</div>
      <div className="carousel-controls">
        <button onClick={prev} aria-label="Previous" className="carousel-btn">
          <img
            src={LeafArrow}
            alt="Previous"
            style={{ width: 28, height: 28, transform: "rotate(-90deg)" }}
          />
        </button>
        <button onClick={next} aria-label="Next" className="carousel-btn">
          <img
            src={LeafArrow}
            alt="Next"
            style={{ width: 28, height: 28, transform: "rotate(90deg)" }}
          />
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={"carousel-dot" + (i === index ? " active" : "")}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
