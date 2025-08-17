import React from "react";

function About() {
  const heroContent = {
    bgImg: "./img/about-banner.jpg",
    title: "About Us",
    text: "Let's Discover More",
  };
  return (
    <div>
      <Hero content={heroContent} />
    </div>
  );
}

export default About;
