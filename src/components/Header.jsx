import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const nav = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "blog", url: "/blog" },
    { name: "gallery", url: "/gallery" },
    { name: "contact", url: "/contact" },
    { name: "FAQs", url: "/faqs" },
  ];
  const navMenu = nav.map((item, ind) => (
    <li key={`nav-${ind}`}>
      <NavLink
        to={item.url}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <header>
      <div className="header__wrap d-flex jcsb">
        <div className="header__logo">
          <img src="/img/main-logo-light.png" alt="logo" />
        </div>
        <nav>
          <ul className="header__menu d-flex g7">{navMenu}</ul>
        </nav>
        <div className="search">
          <img src="/img/search.svg" alt="search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
