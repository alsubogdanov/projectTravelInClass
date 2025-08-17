import React from "react";

function Hero({ content }) {
  console.log(content);

  return (
    <div
      className="hero"
      style={{
        height: content?.height ? content.height : "60vh",
        backgroundImage: content?.bgImg
          ? `url(${content.bgImg})`
          : `url(./img/default-bg.jpg)`,
      }}
    ></div>
  );
}

export default Hero;
