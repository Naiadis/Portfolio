import React from "react";
import videoFile from "../assets/OnlineLogo.mp4";

const HeroSection = () => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={videoFile}
      autoPlay
      loop
      muted
      playsInline
    />
  </section>
);

export default HeroSection;
