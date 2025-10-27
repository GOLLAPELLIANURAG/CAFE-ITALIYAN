import React from "react";

const Hero = () => (
  <section className="hero" id="home">
    <video className="background-video" autoPlay muted loop>
      <source src="/demo3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-content">
      <div className="hero-subtitle">Welcome To</div>
      <h1 className="hero-title">CAFE ITALIA</h1>
      <div className="hero-cta">
        <a href="#menu" className="cta-primary">View Menu</a>
      </div>
    </div>
  </section>
);

export default Hero;
