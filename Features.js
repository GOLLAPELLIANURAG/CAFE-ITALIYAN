import React from "react";

const features = [
  {
    title: "Food",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    desc: "Barrette was born from a passion for bringing the finest cuts of beef to the table, with a commitment to sustainability and premium quality.",
  },
  {
    title: "Drinks",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600",
    desc: "From finest coffee to premium cocktails, our drinks menu complements every meal perfectly with expertly crafted beverages.",
  },
  {
    title: "Atmosphere",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    desc: "Experience elegant dining in our beautifully designed space, perfect for intimate dinners or special celebrations.",
  },
];

const Features = () => (
  <section className="features">
    <div className="features-grid">
      {features.map((ft, idx) => (
        <div className="feature-card" key={idx}>
          <img src={ft.img} alt={ft.title} className="feature-image" />
          <div className="feature-overlay">
            <h3 className="feature-title">{ft.title}</h3>
            <p className="feature-desc">{ft.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
