import React from "react";

const highlights = [
  {
    name: "Adana Kebab",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
    price: "€120",
  },
  {
    name: "Meze Platter",
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
    price: "€120",
  },
  {
    name: "Baklava",
    img: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400",
    price: "€120",
  },
  {
    name: "Kebab Platter",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    price: "€120",
  },
];

const Highlights = () => (
  <section className="highlights">
    <div className="highlights-subtitle">OUR TOP PICKS THIS MONTH</div>
    <h2 className="section-title">Monthly <span className="section-title-gold">Highlights</span></h2>
    <div className="highlights-grid">
      {highlights.map((hl, idx) => (
        <div className="highlight-card" key={idx}>
          <img src={hl.img} alt={hl.name} className="highlight-image" />
          <div className="highlight-info">
            <h4 className="highlight-name">{hl.name}</h4>
            <p className="highlight-price">{hl.price}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Highlights;
