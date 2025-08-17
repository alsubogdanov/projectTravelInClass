import React from "react";

function Hero({ content }) {
  console.log(content);

  return (
    <section
      className="hero mb12"
      style={{
        height: content?.height ? content.height : "60vh",
        backgroundImage: content?.bgImg
          ? `url(${content.bgImg})`
          : `url(./img/default-bg.jpg)`,
      }}
    >
      {content && (
        <div className="hero__wrap d-flex f-column jcc aic h100">
          <p>{content.text}</p>
          <h1>{content.title}</h1>
        </div>
      )}
    </section>
  );
}

export default Hero;
