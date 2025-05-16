import React, { useState } from 'react';
import '../App.css'; // for styling
import confetti from 'canvas-confetti';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cakeOcassions = [
    {
      name: "Birthday Cake",
      quote: "A birthday cake for joy so great, make a wish and celebrate!",
      img: "/images/d06cd34b-4ec9-42c1-a3b0-78a532a89ea0-removebg-preview.png"
    },
    {
      name: "Wedding Cake",
      quote: "A wedding cake to seal your fate, love and sweetness on every plate.",
      img: "/images/wedding.png"
    },
    {
      name: "Anniversary Cake",
      quote: "An anniversary cake with love to bake, sweet memories in every flake.",
      img: "/images/tq38n9dv-removebg-preview.png"
    },
    {
      name: "Baby Shower Cake",
      quote: "A cake for baby, soft and sweet, a little joy we soon shall meet.",
      img: "/images/iy1glw7a-removebg-preview.png"
    },
    {
      name: "Graduation Cake",
      quote: "A cake for dreams that now awake, cap, scroll, and a future to make.",
      img: "/images/grad-removebg-preview.png"
    },
    {
      name: "Valentine's Cake",
      quote: "For love that makes the heartbeat quake, share a slice of valentine cake.",
      img: "/images/val-removebg-preview.png"
    },
    {
      name: "Corporate Cake",
      quote: "For deals and teams that never break, cut success in a corporate cake.",
      img: "/images/02da3b75-d808-4c3d-a220-22f266e3bdef-removebg-preview.png"
    },
    {
      name: "Christmas Cake",
      quote: "Jingle bells and snowy flake, bring cheer with a Christmas cake.",
      img: "/images/xmas-removebg-preview.png"
    },
    {
      name: "Custom Cake",
      quote: "Your dream cake we proudly make, any theme, any shape — just bake!",
      img: "/images/e90b466c-1898-494f-846f-bc73a737291a-removebg-preview.png"
    },
    {
        name: "Easter Cake",
        quote: "For Easter joy with hearts awake, share sweet love with a bunny cake.",
        img: "/images/easter-removebg-preview.png"
    },
    {
        name: "Ramadan Cake",
        quote: "A Ramadan cake at evening break, sweet blessings with each bite you take.",
        img: "/images/ramadan-removebg-preview.png"
    },
    {
        name: "Diwali Cake",
        quote: "A Diwali cake with lights that stake, joy and sweets in every bake.",
        img: "/images/diwali-removebg-preview.png"
    }
  ];


   const { name, quote, img } = cakeOcassions[currentIndex];

  

    const fireConfetti = () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb3c6', '#ffc6ec', '#e0bbe4', '#f3c5ff']
    });
    };

    const updateCurrentIndex = () => {
    fireConfetti(); // trigger confetti
    setCurrentIndex((prev) => (prev + 1) % cakeOcassions.length);
    };


  return (
    <div className="main-section">
      <div className="occasion-card">
        <div className="text-content">
          <h2>{name}</h2>
          <p>{quote}</p>
          <button onClick={updateCurrentIndex}>More →</button>
        </div>
        <div className="image-content">
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Main;
