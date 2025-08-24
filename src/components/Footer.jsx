import React from "react";
import FormSimple from "./FormSimple";

function Footer() {
  return (
    <footer
      className="pt9 pb9"
      style={{ backgroundImage: 'url("/img/footer-bg.jpg")' }}
    >
      <FormSimple />
      <div className="footer__menu">Footer menu</div>
    </footer>
  );
}

export default Footer;
