import React from "react";
import CornerVines from "../assets/CornerVines.svg";
import "../index.css";

const slides = [
  {
    text: (
      <>
        <span className="brand-title">The Story of Naiadis</span>
        <p className="brand-text">
          In a forest untouched by time, Naiadis was born from the hands of
          those who whisper to trees and sing to stars. Every item is an echo of
          elven magic — carved, brewed, or cast in ritual. Whether a candle to
          guide your path, a rune to protect your spirit, or a piece of jewelry
          bound in memory, Naiadis offers not products, but relics. Each piece
          is placed with care into a vessel of velvet and wood, where a silent
          spell seals it for the soul it seeks.
        </p>
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
  return (
    <div className="carousel-snap-outer">
      {slides.map((slide, i) => (
        <div className="carousel-snap-slide" key={i}>
          <div className="brand-intro carousel-box">
            <img
              src={CornerVines}
              alt=""
              className="vine vine-tl vine-mirror-x"
            />
            <img src={CornerVines} alt="" className="vine vine-tr" />
            <img src={CornerVines} alt="" className="vine vine-bl" />
            <img
              src={CornerVines}
              alt=""
              className="vine vine-br vine-mirror-y"
            />
            <div className="carousel-content">{slide.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
