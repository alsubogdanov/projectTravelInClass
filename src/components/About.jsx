import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";

function About() {
  const heroContent = {
    bgImg: "./img/about-banner.jpg",
    title: "About Us",
    text: "Home / About",
  };

  return (
    <div>
      <Hero content={heroContent} />
      <AboutSection icons={true} />
    </div>
  );
}

export default About;
