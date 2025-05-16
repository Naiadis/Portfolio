import React, { useState, useRef, useEffect } from "react";
import CornerVines from "../assets/CornerVines.svg";
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
  const [direction, setDirection] = useState(null); // 'left' or 'right'
  const [isAnimating, setIsAnimating] = useState(false);
  const [readyToExitUp, setReadyToExitUp] = useState(false);
  const timeoutRef = useRef(null);
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 30;
  const outerRef = useRef(null);
  const armExitTimer = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      const atFirstAndUp = index === 0 && e.deltaY < 0;
      const atLastAndDown = index === slides.length - 1 && e.deltaY > 0;
      if (atFirstAndUp) {
        if (readyToExitUp) {
          setReadyToExitUp(false); // reset after exit
          return; // allow page scroll
        } else {
          e.preventDefault();
          e.stopPropagation();
          // Reset and re-arm exit timer
          if (armExitTimer.current) clearTimeout(armExitTimer.current);
          armExitTimer.current = setTimeout(() => setReadyToExitUp(true), 350);
          return;
        }
      }
      setReadyToExitUp(false); // reset if leaving first slide
      if (!atLastAndDown) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (isAnimating) return;
      scrollAccumulator.current += e.deltaY;
      if (
        scrollAccumulator.current > SCROLL_THRESHOLD &&
        index < slides.length - 1
      ) {
        setDirection("left");
        setIsAnimating(true);
        setIndex((i) => i + 1);
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < -SCROLL_THRESHOLD && index > 0) {
        setDirection("right");
        setIsAnimating(true);
        setIndex((i) => i - 1);
        scrollAccumulator.current = 0;
      }
    };
    const node = outerRef.current;
    if (node) {
      node.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => {
      if (node) node.removeEventListener("wheel", handleWheel);
      if (armExitTimer.current) clearTimeout(armExitTimer.current);
    };
  }, [index, isAnimating, readyToExitUp]);

  useEffect(() => {
    if (isAnimating) {
      timeoutRef.current = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timeoutRef.current);
    }
    // No longer arm exit immediately here
  }, [isAnimating, index]);

  return (
    <div
      className="carousel-parallax-outer"
      ref={outerRef}
      tabIndex={0}
      style={{ outline: "none" }}
    >
      {slides.map((slide, i) => {
        let className = "brand-intro carousel-box parallax-box";
        if (i === index) {
          className += " active";
          if (direction === "left") className += " in-left";
          if (direction === "right") className += " in-right";
        } else if (i === index - 1 && direction === "right") {
          className += " out-right";
        } else if (i === index + 1 && direction === "left") {
          className += " out-left";
        } else {
          className += " hidden";
        }
        return (
          <div key={i} className={className}>
            <img src={CornerVines} alt="" className="vine vine-tl" />
            <img src={CornerVines} alt="" className="vine vine-tr" />
            <img src={CornerVines} alt="" className="vine vine-bl" />
            <img src={CornerVines} alt="" className="vine vine-br" />
            <div className="carousel-content">{slide.text}</div>
          </div>
        );
      })}
    </div>
  );
}
