import React from "react";

// Reduced particle count
const PARTICLE_COUNT = 48; 

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const FloatingParticles = () => {
  // Using CSS animations instead of the Web Animations API
  // This is more efficient and lets the browser optimize better
  return (
    <div className="particles-bg">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        // Pre-calculate random values
        const left = `${random(2, 98)}%`;
        const top = `${random(0, 100)}%`;
        const size = random(1, 3);
        const duration = random(6, 12);
        const delay = random(0, 5);
        
        return (
          <span
            key={i}
            className="particle"
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              // Add hardware acceleration hint
              transform: 'translateZ(0)',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;