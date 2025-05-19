import React from "react";
import CornerVines from "../assets/CornerVines.svg";
import Screenshot1 from "../assets/Screenshot 2025-05-07 at 14.28.30.png";
import Screenshot2 from "../assets/Screenshot 2025-05-07 at 14.29.07.png";
import Screenshot3 from "../assets/Screenshot 2025-05-07 at 14.30.21.png";
import Screenshot4 from "../assets/Screenshot 2025-05-07 at 14.30.33.png";
import Screenshot5 from "../assets/Screenshot 2025-05-07 at 14.30.49.png";
import VelvetPouch from "../assets/Velvet Pouch.png";

const PackagingSection = () => {
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
          <div className="packaging-item" style={{ "--offset": 1 }}>
            <img src={Screenshot1} alt="Packaging Design 1" />
          </div>
          <div className="packaging-item" style={{ "--offset": 2 }}>
            <img src={Screenshot2} alt="Packaging Design 2" />
          </div>
          <div className="packaging-item" style={{ "--offset": 3 }}>
            <img src={Screenshot3} alt="Packaging Design 3" />
          </div>
          <div className="packaging-item" style={{ "--offset": 4 }}>
            <img src={Screenshot4} alt="Packaging Design 4" />
          </div>
          <div className="packaging-item" style={{ "--offset": 5 }}>
            <img src={Screenshot5} alt="Packaging Design 5" />
          </div>
          <div className="packaging-item" style={{ "--offset": 6 }}>
            <img src={VelvetPouch} alt="Velvet Pouch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagingSection;
