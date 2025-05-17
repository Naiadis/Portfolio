import React, { useState, useRef } from "react";
import AmbigramBlack from "../assets/AmbigramBlack.svg";
import AmbigramWhite from "../assets/AmbigramWhite.svg";
import AmbigramVertBlack from "../assets/AmbigramVertBlack.svg";
import AmbigramVertWhite from "../assets/AmbigramVertWhite.svg";
import CornerVines from "../assets/CornerVines.svg";

const logoData = [
  {
    title: "Primary Logo Lock-Up (Black and White)",
    desc: "The Naiadis ambigram was not created with immediate readability as its main goal. Instead, it was designed to resemble a rune or an ancient spell, something that only reveals its meaning to those who know how to read it, or to those curious enough to seek its secrets. Choosing an ambigram was intentional. The mirrored symmetry and complexity evoke mystery and magic, aligning perfectly with the essence of the brand. It becomes more than a logo — it's a symbol of initiation.",
    images: [
      { src: AmbigramBlack, alt: "Horizontal Black", bg: "#fff" },
      { src: AmbigramWhite, alt: "Horizontal White", bg: "#000" },
    ],
  },
  {
    title: "Alternate Vertical Lock-Up (Black and White)",
    desc: "For smaller applications or vertical formats, a distilled version of the ambigram is used. A fragment that captures the central form and symmetry of the full logo. While the letters 'I' and 'A' sit at its core, this version is not meant to be read literally. This mark represents the heart of Naiadis.",
    images: [
      { src: AmbigramVertBlack, alt: "Vertical Black", bg: "#fff" },
      { src: AmbigramVertWhite, alt: "Vertical White", bg: "#000" },
    ],
  },
];

export default function LogoSection() {
  const [step, setStep] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState("right");
  const [nextStep, setNextStep] = useState(null);
  const scrollTimeout = useRef(null);

  const handleWheel = (e) => {
    if (transitioning || scrollTimeout.current) return;
    let targetStep = step;
    let dir = null;
    if (e.deltaY > 0 && step < logoData.length - 1) {
      targetStep = step + 1;
      dir = "right";
    } else if (e.deltaY < 0 && step > 0) {
      targetStep = step - 1;
      dir = "left";
    }
    if (targetStep !== step) {
      setDirection(dir);
      setNextStep(targetStep);
      setTransitioning(true);
      scrollTimeout.current = setTimeout(() => {
        setStep(targetStep);
        setTransitioning(false);
        setNextStep(null);
        scrollTimeout.current = null;
      }, 400); // match animation duration
    }
  };

  return (
    <div className="logo-gallery" onWheel={handleWheel}>
      <div
        className={`logo-card slide-base ${
          transitioning
            ? direction === "right"
              ? "slide-out-left"
              : "slide-out-right"
            : "slide-in-center"
        }`}
        key={step}
      >
        <img src={CornerVines} alt="" className="vine vine-tl" />
        <img src={CornerVines} alt="" className="vine vine-tr" />
        <img src={CornerVines} alt="" className="vine vine-bl" />
        <img src={CornerVines} alt="" className="vine vine-br" />
        <h2 className="logo-title">{logoData[step].title}</h2>
        <p className="logo-desc">{logoData[step].desc}</p>
        <div className="logo-imgs">
          {logoData[step].images.map((img, i) => (
            <div className="logo-img-bg" style={{ background: img.bg }} key={i}>
              <img
                src={img.src}
                alt={img.alt}
                className={`logo-img${
                  img.alt.includes("Vertical") ? " logo-img-vert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      {transitioning && nextStep !== null && (
        <div
          className={`logo-card slide-base ${
            direction === "right" ? "slide-in-right" : "slide-in-left"
          }`}
          key={nextStep}
        >
          <img src={CornerVines} alt="" className="vine vine-tl" />
          <img src={CornerVines} alt="" className="vine vine-tr" />
          <img src={CornerVines} alt="" className="vine vine-bl" />
          <img src={CornerVines} alt="" className="vine vine-br" />
          <h2 className="logo-title">{logoData[nextStep].title}</h2>
          <p className="logo-desc">{logoData[nextStep].desc}</p>
          <div className="logo-imgs">
            {logoData[nextStep].images.map((img, i) => (
              <div
                className="logo-img-bg"
                style={{ background: img.bg }}
                key={i}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`logo-img${
                    img.alt.includes("Vertical") ? " logo-img-vert" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
