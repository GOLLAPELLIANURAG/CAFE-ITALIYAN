import React from "react";

const MENU = [
  {
    title: "Italian dishes",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    desc: "Authentic Italian recipes",
  },
  {
    title: "Pastry",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600",
    desc: "Freshly baked delights",
  },
  {
    title: "Coffee",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
    desc: "Premium Italian espresso",
  },
];

const MenuSection = () => (
  <section className="menu-section" id="menu">
    <div className="section-subtitle">EXPLORE MENU</div>
    <h2 className="section-title">Our Menu</h2>
    <div className="menu-grid">
      {MENU.map(item => (
        <div className="menu-card" key={item.title}>
          <img src={item.img} alt={item.title} className="menu-image" />
          <div className="menu-info">
            <h3 className="menu-title">{item.title}</h3>
            <p className="menu-desc">{item.desc}</p>
            <a href="#" className="view-menu-btn">VIEW MENU</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MenuSection;
