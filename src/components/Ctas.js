import React from 'react';
import '../App.css';
import confetti from 'canvas-confetti';

export default function Ctas() {
  const ctaContent = [
    {
      name: "Why Us?",
      img: "/images/Blue_icing_fantasy_cupcake_-5-removebg-preview.png",
      description: "Delighting every moment with cakes baked with love and magic.",
      btnLabel: "Learn More"
    },
    {
      name: "Order Now",
      img: "/images/gxnoitg9-removebg-preview.png",
      description: "Choose your flavour, we’ll craft it fresh and tasty just for you.",
      btnLabel: "Get Cake"
    },
    {
      name: "Custom Designs",
      img: "/images/cakebg.png ",
      description: "From theme to taste, your dream cake becomes real here.",
      btnLabel: "Customize"
    }
  ];

   const fireConfetti = () => {
      confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffb3c6', '#ffc6ec', '#e0bbe4', '#f3c5ff']
      });
    };

    const handleCta = (content) => {
      fireConfetti();

      console.log(content.name)
    }

  return (
    <div className="cta-container">
      {ctaContent.map((content, index) => (
        <div key={index} className="cta-card">
          <div className="cta-image">
            <img src={content.img} alt={content.name} />
          </div>
          <div className="cta-info">
            <h2>{content.name}</h2>
            <p>{content.description}</p>
            <button onClick={() => handleCta(content)}>{content.btnLabel}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
