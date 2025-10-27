import React from "react";

const testimonials = [
  {
    avatar: "A",
    name: "Anna Matthew",
    daysAgo: "one day ago",
    rating: 5,
    text: "Favorite desserts are unforgettable. Great experience! The food, service, and ambiance are second to none. We will definitely be coming back. We booked in private dining for our...",
  },
  {
    avatar: "G",
    name: "Grrim Tom",
    daysAgo: "one day ago",
    rating: 4,
    text: "We booked in private dining for our anniversary, and everything was perfect. The steak was melt-in-your-mouth delicious, and the staff was amazing!",
  },
  {
    avatar: "M",
    name: "Merv Elzah",
    daysAgo: "one day ago",
    rating: 5,
    text: "Best steak I've ever had. The quality of the meat was outstanding, and the truffle fries were to die for. Highly recommend!",
  },
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="section-subtitle">REVIEWS</div>
    <h2 className="section-title">Hear Our Guests</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <div className="test-header">
            <div className="test-avatar">{t.avatar}</div>
            <div className="test-info">
              <h4>{t.name}</h4>
              <p>{t.daysAgo}</p>
            </div>
          </div>
          <div className="rating">
            {"★".repeat(t.rating)}{"☆".repeat(5-t.rating)}
          </div>
          <p className="test-text">{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
