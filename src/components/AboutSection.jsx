import React from "react";
import { Link } from "react-router-dom";
function AboutSection(props) {
  console.log(props);
  const icons = [
    { img: "./img/fb.svg", link: "fb.com" },
    { img: "./img/inst.svg", link: "instagram.com" },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about__wrap d-flex jce">
          <img src="./img/about-img.jpg" alt="" />
          <div className="about__details">
            <p className="about_header">Who am i</p>
            <h2 className="section_title">
              Sharing my travel experience after visiting 40 countries
            </h2>
            <p>
              I believe i'm a true world citizen. Join me on my journey to
              discover yourself by discovering the world.
            </p>
            {props?.btn && <Link to="/about">Read full story</Link>}
            {/* {props?.icons &&} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
