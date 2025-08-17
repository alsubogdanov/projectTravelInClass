import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";

function Home() {
  const heroContent = {
    bgImg: "./img/banner1-img.jpg",
    height: "80vh",
    title: "Mountains are calling",
    text: "Let's Discover More",
  };
  return (
    <>
      <Hero content={heroContent} />
      <AboutSection btn={true} />
    </>
  );
}

export default Home;
