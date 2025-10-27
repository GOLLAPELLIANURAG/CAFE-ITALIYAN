import React, { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* Contact Info (left side) */}
        <div className="header-contact-info">
          <span className="header-contact-item">
            <span role="img" aria-label="Location">📍</span> 2 Bury Old Road, Manchester
          </span>
          <span className="header-contact-item">
            <span role="img" aria-label="Phone">📞</span> +161 795 5502
          </span>
          <span className="header-contact-item">
            <span role="img" aria-label="Email">✉️</span> reservations@istabulsrestaurantmanchester.co.uk
          </span>
        </div>
        {/* Nav links (right side) */}
        <ul className={`nav-links${navOpen ? " active" : ""}`} id="navLinks">
          <li><a href="#home">HOME</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a href="#contact" className="book-btn">BOOK TABLE</a></li>
        </ul>
        <button
          className="mobile-nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span className="hamburger"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
