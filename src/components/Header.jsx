import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			
			if (window.scrollY > 50) setScrolled(true);
			else setScrolled(false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
  const nav = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "blog", url: "/blog" },
	 { name: "test", url: "/test" },
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
    <header
	 	style={{backgroundColor: scrolled ? "#333333" : 'transparent'}} 
	 >
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
