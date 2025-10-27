import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-logo">
        <div className="footer-logo-icon"></div>
        <div className="footer-logo-text">CAFE ITALIA</div>
      </div>
      <div className="footer-nav">
        <a href="#home">HOME</a>
        <a href="#menu">MENU</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div className="social-icons">
        <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
      </div>
      <div className="footer-bottom">
        <p>2025</p>
      </div>
    </div>
  </footer>
);

export default Footer;
