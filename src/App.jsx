import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import NaiadisCarousel from "./components/NaiadisCarousel";
import LogoSection from "./components/LogoSection";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ColorPaletteSection from "./components/ColorPaletteSection";
import PackagingSection from "./components/PackagingSection";
import ProcessModal from "./components/ProcessModal";

// Import images
import heroScreenshot8 from "./assets/Screenshot 2025-05-21 at 17.51.02.png";
import heroScreenshot7 from "./assets/Screenshot 2025-05-21 at 17.50.15.png";
import heroScreenshot6 from "./assets/Screenshot 2025-05-21 at 17.48.53.png";
import heroScreenshot5 from "./assets/Screenshot 2025-05-21 at 17.48.48.png";
import heroScreenshot4 from "./assets/Screenshot 2025-05-21 at 17.43.06.png";
import heroScreenshot3 from "./assets/Screenshot 2025-05-21 at 17.42.14.png";
import heroScreenshot2 from "./assets/Screenshot 2025-05-21 at 17.38.57.png";
import heroScreenshot1 from "./assets/Screenshot 2025-05-21 at 17.38.47.png";
import logoImage from "./assets/image.png";
import logoImage2 from "./assets/Screenshot 2025-05-21 at 18.59.40.png";
import logoImage3 from "./assets/Screenshot 2025-05-21 at 19.01.33.png";
import packagingImage from "./assets/Screenshot 2025-05-21 at 19.20.19.png";
import packagingImage2 from "./assets/Screenshot 2025-05-21 at 19.24.33.png";
import packagingImage3 from "./assets/Screenshot 2025-05-21 at 19.28.28.png";
import packagingImage4 from "./assets/Screenshot 2025-05-21 at 19.31.28.png";
import packagingImage5 from "./assets/Screenshot 2025-05-21 at 19.29.13.png";
import packagingImage6 from "./assets/Screenshot 2025-05-21 at 19.30.49.png";


const sectionContent = {
  hero: {
    title: "The Creation Process",
    content: (
      <div>
        <p>
            Here I will detail the Blender journey of creating the Naiadis online brand
            identity. From the initial idea, to the final manifestation of the
            brand's presence.
        </p>
        <br />
        <br />
        <p>
          Everything started from wanting to create the letter N, that of course
          stands for Naiadis, in a very unique way.
        </p>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          
          <img
            src={heroScreenshot1}
            alt="Hero section screenshot 1"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          /><p>
            I was very unsure with what I have created and I had a lot of self
            doubt.
          </p>
          <img
            src={heroScreenshot2}
            alt="Hero section screenshot 2"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            But I decided to trust the process and move forward with adding more
            details to the letter.
          </p>
          <img
            src={heroScreenshot3}
            alt="Hero section screenshot 3"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            The details I chose to add were the vines, which I had to manually
            trace from around the letter and readjust every single flower
            to make sure they were facing the right direction (my computer
            hated the high polygon count of the flowers but I had no choice
            if I wanted to keep the quality).
          </p>
          <img
            src={heroScreenshot4}
            alt="Hero section screenshot 4"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            I added a sphere to use as an emiter for the petal particles I have created.
          </p>
          <img
            src={heroScreenshot5}
            alt="Hero section screenshot 5"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            Changed a few settings of the particles to make them move
            in a way that was reaching my vision.
          </p>
          <img
            src={heroScreenshot6}
            alt="Hero section screenshot 6"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            I added force fields like, magnet, vortex, wind, to hit that sweet spot
            between a realistic and a fantasy look.
          </p>
          <img
            src={heroScreenshot7}
            alt="Hero section screenshot 7"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            And of course, after the selection of the materials and setting up the scene,
            there was a process of trial and error to get the right settings for the render.
            Only after that I was able to render the 150 frames I needed to create the animation.
          </p>
          <img
            src={heroScreenshot8}
            alt="Hero section screenshot 8"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
        </div>
      </div>
    ),
  },
  logo: {
    title: "Logo Design Process",
    content: (
      <div>
        <p>
          <br />
          This section will reveal the "art" of crafting the Naiadis
          ambigram. From the initial sketches to the final form, we'll
          explore:
          <br />
          <br />
        </p>
        <p>I started from and ambition of creating my own ambigram because I
          thought it would be a fun challenge. And it was a challange indeed,
          especially tring to figure out how I can make the N look like the S at the end.
          But everything got easier when I devided the letters differently.
        </p>
        <img
            src={logoImage}
            alt="Hero section screenshot 8"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            I moved my work to Illustrator to create a more organised and clean version.
            Here you can also see the initial color palette I had in mind.
          </p>
          <img
            src={logoImage2}
            alt="Hero section screenshot 8"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
          <p>
            Because the last version was too thin, it would have not worked for the final 3D
            product I had in mind. So I had to combine it with a font to give it more weight
            while still keeping the ambigram look and feel of the brand.
          </p>
          <img
            src={logoImage3}
            alt="Hero section screenshot 8"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #835433",
            }}
          />
      </div>
    ),
  },
  packaging: {
    title: "Packaging Design Journey",
    content: (
      <div>
        <p>
          <br />
          Discover the alchemical process of creating vessels worthy of holding
          Naiadis treasures. Why am I saying alchemical? Because I used my blood,
          sweat and tears to create this. Literally.
          <br />
          <br />
        </p>
        <p>
          I started by founding an already existing design that I could use as a base.
        </p>
        <img
          src={packagingImage2}
          alt="Hero section screenshot 8"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
        <p>
          I then added my own touch to it by designing the Naiadis logo 
          and some vines to go around it.
        </p>
        <img
          src={packagingImage}
          alt="Hero section screenshot 8"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
        <p>
          I made the corners of the box a bit more rounded and added a bit of a 
          different texture to it.
        </p>
        <img
          src={packagingImage4}
          alt="Hero section screenshot 8"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
        <p>
          And here you can see how I transformed the SVG vines into a 3D model.
        </p>
        <img
          src={packagingImage3}
          alt="Hero section screenshot 8"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
        <p>
         What really brought the whole design to life was the scene.
         Luckily it was an already existing one, so I just had to position my package 
         and position the lights better. (I can't explain how many times I was praying to the gods of Blender
         to not crash my computer when I was rendering the whole scene)
        </p>
        <img
          src={packagingImage5}
          alt="Hero section screenshot 8"
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
        <p>
          And here you can see the scene set up closer.
        </p>
        <img
          src={packagingImage6}
          alt="Hero section screenshot 8"
          style={{  
            width: "100%",
            borderRadius: "8px",
            border: "2px solid #835433",
          }}
        />
      </div>
    ),
  },
};

function App() {
  const heroRef = useRef();
  const logoRef = useRef();
  const packagingRef = useRef();
  const [activeSection, setActiveSection] = useState("hero");
  const [modalOpen, setModalOpen] = useState(false);

  // Setup particle movement variables on component mount
  useEffect(() => {
    const particles = document.querySelectorAll(".particle");
    particles.forEach((particle) => {
      // Set random movement direction for each particle
      const x = Math.random() * 30 - 15;
      const y = Math.random() * 30 - 15;
      particle.style.setProperty("--x", `${x}px`);
      particle.style.setProperty("--y", `${y}px`);
    });
  }, []);

  // Intersection Observer for section tracking
  useEffect(() => {
    const sections = [
      { key: "hero", ref: heroRef },
      { key: "logo", ref: logoRef },
      { key: "packaging", ref: packagingRef },
    ];
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.dataset.section);
        }
      },
      { threshold: 0.5 }
    );
    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero-section" ref={heroRef} data-section="hero">
        <HeroSection />
      </section>
      <BackgroundWrapper>
        <section className="page-content">
          <NaiadisCarousel />
        </section>
        <section className="page-content" ref={logoRef} data-section="logo">
          <LogoSection />
        </section>
        <section className="page-content">
          <ColorPaletteSection />
        </section>
        <section
          className="page-content"
          ref={packagingRef}
          data-section="packaging"
        >
          <PackagingSection />
        </section>
      </BackgroundWrapper>
      {sectionContent[activeSection] &&
        sectionContent[activeSection].content && (
          <>
            <button
              className="read-more-btn"
              onClick={() => setModalOpen(true)}
              aria-label="Read more about the process"
            >
              Read More
            </button>
            <ProcessModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title={sectionContent[activeSection].title}
              content={sectionContent[activeSection].content}
            />
          </>
        )}
    </main>
  );
}

export default App;
