import React, { useState } from "react";

// Your specials data. Add more specials here!
const specials = [
  {
    name: "Classic Ribeye Steak",
    price: "€30",
    img: "https://media.istockphoto.com/id/587207508/photo/sliced-grilled-steak-ribeye-with-herb-butter.jpg?s=612x612&w=0&k=20&c=gm6Kg6rHYH0xWTF5oszm6NZ-hp9aPRbk9V1kvCr8MQI="
  },
  {
    name: "Margherita Pizza",
    price: "€25",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauRcTuclnQCVy9XtvzdmRwpB4ppEpCs9WGw&s"
  },
  {
    name: "Seafood Risotto",
    price: "€35",
    img: "https://kitchenconfidante.com/wp-content/uploads/2023/03/Seafood-Risotto-kitchenconfidante.com-5127-FEATURED-IMAGE.jpg"
  },
  {
    name: "Truffle Pasta",
    price: "€32",
    img: "https://dinnerthendessert.com/wp-content/uploads/2023/07/Truffle-Pasta-17.jpg"
  },
  {
    name: "Chicken Milanese",
    price: "€28",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600"
  }
];

const Specials = () => {
  const [index, setIndex] = useState(0);

  const goLeft = () => {
    setIndex((prev) => (prev === 0 ? specials.length - 1 : prev - 1));
  };

  const goRight = () => {
    setIndex((prev) => (prev === specials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="specials">
      <div className="section-subtitle">OUR MENU</div>
      <h2 className="section-title">Our <span className="section-title-gold">Specials</span></h2>
      <div className="specials-carousel">
        <button className="carousel-btn" onClick={goLeft} aria-label="Previous">
          &#8592;
        </button>
        <div className="special-item carousel-slide">
          <div className="special-price">{specials[index].price}</div>
          <div className="special-image-container">
            <img src={specials[index].img} alt={specials[index].name} className="special-image" />
          </div>
          <h3 className="special-name">{specials[index].name}</h3>
        </div>
        <button className="carousel-btn" onClick={goRight} aria-label="Next">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Specials;
