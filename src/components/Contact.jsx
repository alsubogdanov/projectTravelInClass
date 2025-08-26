import React from "react";
import Hero from "./Hero";
import FormMulti from "./FormMulti";

function Contact() {
  const heroContent = {
    bgImg: "/img/about-banner.jpg",
    title: "Contact",
    text: "Home / Contact",
  };
  return (
    <div>
      <Hero content={heroContent} />
      <FormMulti />
      <section className="branches pt10 pb10">
        <div className="container">
          <div className="branches__wrap d-flex jcsb">
            <div className="branches__item">
              <h2 className="section_title">USA</h2>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 987 321 , +123 123 654</p>
              <p>info@yourcompany.com</p>
            </div>
            <div className="branches__item">
              <h2 className="section_title">USA</h2>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 987 321 , +123 123 654</p>
              <p>info@yourcompany.com</p>
            </div>
            <div className="branches__item">
              <h2 className="section_title">USA</h2>
              <p>730 Glenstone Ave 65802, Springfield, US</p>
              <p>+123 987 321 , +123 123 654</p>
              <p>info@yourcompany.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
