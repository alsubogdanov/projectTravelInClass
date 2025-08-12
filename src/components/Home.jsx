import React from "react";
import Hero from "./Hero";

function Home() {
  const heroContent = {
    bgImg: "./img/banner1-img.jpg",
    height: "80vh",
    title: "Mountains are calling",
    text: "Let's Discover More",
  };
  return (
    <div>
      <Hero content={heroContent} />
    </div>
  );
}

export default Home;
