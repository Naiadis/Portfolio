import React, { useState } from "react";
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
      { src: AmbigramBlack, alt: "Horizontal Black", bg: "#fff", type: "full" },
      { src: AmbigramWhite, alt: "Horizontal White", bg: "#000", type: "full" },
    ],
  },
  {
    title: "Alternate Vertical Lock-Up (Black and White)",
    desc: "For smaller applications or vertical formats, a distilled version of the ambigram is used. A fragment that captures the central form and symmetry of the full logo. While the letters 'I' and 'A' sit at its core, this version is not meant to be read literally. This mark represents the heart of Naiadis.",
    images: [
      {
        src: AmbigramVertBlack,
        alt: "Vertical Black",
        bg: "#fff",
        type: "vertical",
      },
      {
        src: AmbigramVertWhite,
        alt: "Vertical White",
        bg: "#000",
        type: "vertical",
      },
    ],
  },
];

export default function LogoSection() {
  const [step, setStep] = useState(0);
  const [rotationAngles, setRotationAngles] = useState({});

  const handleImageClick = (imageIndex, type) => {
    const uniqueKey = `${type}-${imageIndex}`;
    const currentAngle = rotationAngles[uniqueKey] || 0;
    const newAngle = currentAngle === 0 ? 180 : 0;
    setRotationAngles((prev) => ({
      ...prev,
      [uniqueKey]: newAngle,
    }));
  };

  const goLeft = () => {
    if (step > 0) setStep(step - 1);
  };
  const goRight = () => {
    if (step < logoData.length - 1) setStep(step + 1);
  };

  return (
    <div className="logo-gallery">
      <div className="logo-card slide-base slide-in-center" key={step}>
        <img src={CornerVines} alt="" className="vine vine-tl" />
        <img src={CornerVines} alt="" className="vine vine-tr" />
        <img src={CornerVines} alt="" className="vine vine-bl" />
        <img src={CornerVines} alt="" className="vine vine-br" />
        <h2 className="logo-title">{logoData[step].title}</h2>
        <p className="logo-desc">{logoData[step].desc}</p>
        <div className="logo-imgs">
          {logoData[step].images.map((img, i) => {
            const uniqueKey = `${img.type}-${i}`;
            return (
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
                  style={{
                    transform: `rotate(${rotationAngles[uniqueKey] || 0}deg)`,
                  }}
                  onClick={() => handleImageClick(i, img.type)}
                />
                <div className="tooltip">Click to rotate</div>
              </div>
            );
          })}
        </div>
        <div className="logo-nav">
          <button onClick={goLeft} disabled={step === 0}>
            &larr;
          </button>
          <div className="logo-dots">
            {logoData.map((_, idx) => (
              <span
                key={idx}
                className={`logo-dot${step === idx ? " active" : ""}`}
              ></span>
            ))}
          </div>
          <button onClick={goRight} disabled={step === logoData.length - 1}>
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
