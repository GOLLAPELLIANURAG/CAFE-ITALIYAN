import React from "react";

const PrivateDining = () => (
  <section className="private-dining">
    <div className="private-content">
      <div className="private-text">
        <h3>BOOKING</h3>
        <h2>Private <br /> Group Dining</h2>
        <p>
          At Barrette, we specialize in creating memorable dining experiences, 
          whether you're booking an intimate gathering or a grand celebration. 
          Our private and group dining options are designed to meet your unique needs, 
          with personalized service, exceptional food, and a welcoming atmosphere.
        </p>
        <a href="#contact" className="book-now-btn">BOOK NOW</a>
      </div>
      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800" alt="Private Dining" className="private-image" />
    </div>
  </section>
);

export default PrivateDining;
