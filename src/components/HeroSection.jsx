import React from "react";
import videoFile from "../assets/OnlineLogo.mp4";

const HeroSection = () => (
  <section className="relative w-full h-screen grid place-items-center overflow-hidden">
    <video
      className="absolute"
      style={{ width: "auto", height: "100vh", zIndex: 1 }}
      src={videoFile}
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Left blur - vertical gradient */}
    <div
      style={{
        position: "absolute",
        top: "-1vw",
        left: "-3.5vw",
        width: "6vw",
        height: "100%",
        zIndex: 1,
        background:
          "linear-gradient(to bottom, rgba(131,84,51), #361f0f)",
        filter: "blur(14px)",
      }}
    />
    {/* Right blur - vertical gradient */}
    <div
      style={{
        position: "absolute",
        top: "-1vw",
        right: "-3.5vw",
        width: "6vw",
        height: "100%",
        zIndex: 1,
        background:
          "linear-gradient(to bottom, rgba(131,84,51), #361f0f)",
        filter: "blur(14px)",
      }}
    />
    {/* Bottom blur - more exterior */}
    <div
      style={{
        position: "absolute",
        left: "-1vw",
        right: "-1vw",
        bottom: "-4vh",
        height: "7vh",
        zIndex: 1,
        background: "linear-gradient(to top, #361f0f 60%, #361f0f)",
        filter: "blur(16px)",
      }}
    />
  </section>
);

export default HeroSection;
