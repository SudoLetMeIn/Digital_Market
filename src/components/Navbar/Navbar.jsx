import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { id: 1, link: "/", name: "Home Page" },
    { id: 2, link: "/shop", name: "Shopping Page" },
    { id: 3, link: "/cart", name: "Shopping Cart" },
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let LogoLink = "/";
  let contactLink = "/AboutUs";
  let ImageLogo = "react.svg";
  return (
    <div className="Bar">
      <header>
        <Link className="logo" to={LogoLink}>
          <img src={ImageLogo} alt="logo" />
        </Link>
        <nav>
          <ul className="nav__links">
            {links.map((element) => (
              <li key={element.id}>
                <Link to={element.link}>{element.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="cta" to={contactLink}>
          About Us
        </Link>
        <p className="menu cta" onClick={toggleMenu}>
          Menu
        </p>
      </header>
      <div
        id="mobile__menu"
        className={`overlay ${isMenuOpen ? "overlay--active" : ""}`}
      >
        <Link className="close" onClick={toggleMenu}>
          &times;
        </Link>
        <div className="overlay__content">
          {links.map((element) => (
            <Link key={element.id} to={element.link}>
              {element.name}
            </Link>
          ))}
          <Link key={links.length + 1} to={contactLink}>
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
