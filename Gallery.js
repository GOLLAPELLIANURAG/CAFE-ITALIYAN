import React from "react";

const images = [
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
];

const Gallery = () => (
  <section className="gallery">
    <div className="section-subtitle">GALLERY</div>
    <h2 className="section-title">Follow us</h2>
    <p className="gallery-subtitle">Share your experience with us</p>
    <a href="#" className="instagram-btn">CHECK OUT OUR INSTAGRAM</a>
    <div className="gallery-grid">
      {images.map((img, idx) => (
        <div className="gallery-item" key={idx}>
          <img src={img} alt={`Gallery ${idx + 1}`} className="gallery-image" />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
