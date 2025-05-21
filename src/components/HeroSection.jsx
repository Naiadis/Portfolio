import React from "react";
import videoFile from "../assets/OnlineLogo.mp4";

const HeroSection = () => {
  return (
    <section>
      <video src={videoFile} autoPlay loop muted playsInline />
      <div className="blur-left" />
      <div className="blur-right" />
      <div className="blur-bottom" />
    </section>
  );
};

export default HeroSection;
