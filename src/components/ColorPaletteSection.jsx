import React, { useState } from "react";
import CornerVines from "../assets/CornerVines.svg";

const COLORS = [
  {
    name: "Crisis Red",
    hex: "#bf2222",
    rgb: "R 191\nG 34\nB 34",
    rgbArr: [191, 34, 34],
  },
  {
    name: "Army Green",
    hex: "#514D1F",
    rgb: "R 54\nG 57\nB 62",
    rgbArr: [54, 57, 62],
  },
  {
    name: "Majorca Green",
    hex: "#808038",
    rgb: "R 128\nG 128\nB 56",
    rgbArr: [128, 128, 56],
  },
  {
    name: "Twilight Forest",
    hex: "#555651",
    rgb: "R 85\nG 86\nB 81",
    rgbArr: [85, 86, 81],
  },
  {
    name: "Duqqa Brown",
    hex: "#3a2814",
    rgb: "R 58\nG 40\nB 20",
    rgbArr: [58, 40, 20],
  },
];

const OPACITIES = [0.75, 0.5, 0.25];

export default function ColorPaletteSection() {
  const [copied, setCopied] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(""), 1200);
  };

  return (
    <div className="logo-card color-palette-card">
      <img src={CornerVines} alt="" className="vine vine-tl" />
      <img src={CornerVines} alt="" className="vine vine-tr" />
      <img src={CornerVines} alt="" className="vine vine-bl" />
      <img src={CornerVines} alt="" className="vine vine-br" />
      <div className="palette-flex">
        <div className="palette-text">
          <h2 className="palette-title">Packaging Color Palette</h2>
          <p>
            The palette is timeless, arcane, and herbal. It's like stepping into
            a forest where everything is enchanted and centuries old. It mixes
            ritual warmth (red) with natural balance (greens and browns) and a
            hint of shadow and age (gray).
            <br />
            <br />
            Designed for a brand that invokes the feeling of something that is
            handcrafted, sacred, and like it belongs to another realm.
          </p>
        </div>
        <div className="palette-swatches-grid">
          <div className="palette-row top-row">
            <div className="palette-col">
              <div
                className="main-swatch"
                style={{ background: COLORS[0].hex }}
              ></div>
              <div className="palette-fades-row">
                {OPACITIES.map((op) => (
                  <div
                    key={op}
                    className="fade-swatch-row"
                    style={{ background: COLORS[0].hex, opacity: op }}
                  >
                    <span className="fade-label-row">
                      {Math.round(op * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="palette-labels">
                <span className="palette-name">{COLORS[0].name}</span>
                <span
                  className="palette-hex copyable"
                  onClick={() => handleCopy(COLORS[0].hex)}
                >
                  {COLORS[0].hex}
                  {copied === COLORS[0].hex && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
                <span
                  className="palette-rgb copyable"
                  onClick={() =>
                    handleCopy(`rgb(${COLORS[0].rgbArr.join(", ")})`)
                  }
                >
                  {COLORS[0].rgb.replace(/\n/g, " ")}
                  {copied === `rgb(${COLORS[0].rgbArr.join(", ")})` && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
              </div>
            </div>
            <div className="palette-col">
              <div
                className="main-swatch"
                style={{ background: COLORS[1].hex }}
              ></div>
              <div className="palette-fades-row">
                {OPACITIES.map((op) => (
                  <div
                    key={op}
                    className="fade-swatch-row"
                    style={{ background: COLORS[1].hex, opacity: op }}
                  >
                    <span className="fade-label-row">
                      {Math.round(op * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="palette-labels">
                <span className="palette-name">{COLORS[1].name}</span>
                <span
                  className="palette-hex copyable"
                  onClick={() => handleCopy(COLORS[1].hex)}
                >
                  {COLORS[1].hex}
                  {copied === COLORS[1].hex && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
                <span
                  className="palette-rgb copyable"
                  onClick={() =>
                    handleCopy(`rgb(${COLORS[1].rgbArr.join(", ")})`)
                  }
                >
                  {COLORS[1].rgb.replace(/\n/g, " ")}
                  {copied === `rgb(${COLORS[1].rgbArr.join(", ")})` && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="palette-row middle-row">
            <div className="palette-col center-col">
              <div
                className="main-swatch"
                style={{ background: COLORS[2].hex }}
              ></div>
              <div className="palette-fades-row">
                {OPACITIES.map((op) => (
                  <div
                    key={op}
                    className="fade-swatch-row"
                    style={{ background: COLORS[2].hex, opacity: op }}
                  >
                    <span className="fade-label-row">
                      {Math.round(op * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="palette-labels">
                <span className="palette-name">{COLORS[2].name}</span>
                <span
                  className="palette-hex copyable"
                  onClick={() => handleCopy(COLORS[2].hex)}
                >
                  {COLORS[2].hex}
                  {copied === COLORS[2].hex && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
                <span
                  className="palette-rgb copyable"
                  onClick={() =>
                    handleCopy(`rgb(${COLORS[2].rgbArr.join(", ")})`)
                  }
                >
                  {COLORS[2].rgb.replace(/\n/g, " ")}
                  {copied === `rgb(${COLORS[2].rgbArr.join(", ")})` && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="palette-row bottom-row">
            <div className="palette-col">
              <div
                className="main-swatch"
                style={{ background: COLORS[3].hex }}
              ></div>
              <div className="palette-fades-row">
                {OPACITIES.map((op) => (
                  <div
                    key={op}
                    className="fade-swatch-row"
                    style={{ background: COLORS[3].hex, opacity: op }}
                  >
                    <span className="fade-label-row">
                      {Math.round(op * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="palette-labels">
                <span className="palette-name">{COLORS[3].name}</span>
                <span
                  className="palette-hex copyable"
                  onClick={() => handleCopy(COLORS[3].hex)}
                >
                  {COLORS[3].hex}
                  {copied === COLORS[3].hex && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
                <span
                  className="palette-rgb copyable"
                  onClick={() =>
                    handleCopy(`rgb(${COLORS[3].rgbArr.join(", ")})`)
                  }
                >
                  {COLORS[3].rgb.replace(/\n/g, " ")}
                  {copied === `rgb(${COLORS[3].rgbArr.join(", ")})` && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
              </div>
            </div>
            <div className="palette-col">
              <div
                className="main-swatch"
                style={{ background: COLORS[4].hex }}
              ></div>
              <div className="palette-fades-row">
                {OPACITIES.map((op) => (
                  <div
                    key={op}
                    className="fade-swatch-row"
                    style={{ background: COLORS[4].hex, opacity: op }}
                  >
                    <span className="fade-label-row">
                      {Math.round(op * 100)}%
                    </span>
                  </div>
                ))}
              </div>
              <div className="palette-labels">
                <span className="palette-name">{COLORS[4].name}</span>
                <span
                  className="palette-hex copyable"
                  onClick={() => handleCopy(COLORS[4].hex)}
                >
                  {COLORS[4].hex}
                  {copied === COLORS[4].hex && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
                <span
                  className="palette-rgb copyable"
                  onClick={() =>
                    handleCopy(`rgb(${COLORS[4].rgbArr.join(", ")})`)
                  }
                >
                  {COLORS[4].rgb.replace(/\n/g, " ")}
                  {copied === `rgb(${COLORS[4].rgbArr.join(", ")})` && (
                    <span className="copied">Copied!</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
