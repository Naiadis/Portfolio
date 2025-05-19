import React, { useState } from "react";
import CornerVines from "../assets/CornerVines.svg";
import Screenshot1 from "../assets/Screenshot 2025-05-07 at 14.28.30.png";
import Screenshot2 from "../assets/Screenshot 2025-05-07 at 14.29.07.png";
import Screenshot3 from "../assets/Screenshot 2025-05-07 at 14.30.21.png";
import Screenshot4 from "../assets/Screenshot 2025-05-07 at 14.30.33.png";
import Screenshot5 from "../assets/Screenshot 2025-05-07 at 14.30.49.png";
import VelvetPouch from "../assets/Velvet Pouch.png";

const images = [
  { src: Screenshot1, alt: "Packaging Design 1" },
  { src: Screenshot2, alt: "Packaging Design 2" },
  { src: Screenshot3, alt: "Packaging Design 3" },
  { src: Screenshot4, alt: "Packaging Design 4" },
  { src: Screenshot5, alt: "Packaging Design 5" },
  { src: VelvetPouch, alt: "Velvet Pouch" },
];

const PackagingSection = () => {
  const [enlarged, setEnlarged] = useState(null);

  return (
    <div className="logo-card packaging-card">
      <img src={CornerVines} alt="" className="vine vine-tl" />
      <img src={CornerVines} alt="" className="vine vine-tr" />
      <img src={CornerVines} alt="" className="vine vine-bl" />
      <img src={CornerVines} alt="" className="vine vine-br" />

      <div className="packaging-intro">
        <h2>Packaging Design Process</h2>
        <p>
          Each packaging element was crafted using specialized tools:
          Illustrator for the ambigram design, Blender for the detailed wooden
          box modeling, and Photoshop with AI assistance for the luxurious
          velvet pouch. This combination of traditional and modern techniques
          ensures each piece maintains its unique character while achieving a
          cohesive, premium look.
        </p>
      </div>

      <div className="packaging-carousel-grid">
        <input
          type="radio"
          name="packaging"
          className="packaging-radio"
          defaultChecked
        />
        <input type="radio" name="packaging" className="packaging-radio" />
        <input type="radio" name="packaging" className="packaging-radio" />
        <input type="radio" name="packaging" className="packaging-radio" />
        <input type="radio" name="packaging" className="packaging-radio" />
        <input type="radio" name="packaging" className="packaging-radio" />

        <div className="packaging-carousel">
          {images.map((img, i) => (
            <div
              className="packaging-item"
              style={{ "--offset": i + 1 }}
              key={i}
            >
              <div className="enlarge-img-wrapper">
                <img
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setEnlarged(img)}
                  style={{ cursor: "pointer" }}
                />
                <span className="enlarge-icon" title="Enlarge">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {enlarged && (
        <div className="modal-overlay" onClick={() => setEnlarged(null)}>
          <div
            className="modal-img-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setEnlarged(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={enlarged.src}
              alt={enlarged.alt}
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PackagingSection;
