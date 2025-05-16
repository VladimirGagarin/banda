import React from 'react';
import '../App.css';

export default function Intro() {
  return (
    <header className="intro">
      <img
        src="https://aicdn.picsart.com/5c4f4549-6094-441f-a441-55f44487ce6c.png" // your centered logo
        alt="Logo"
        className="logo"
      />
      <img
        src="../images/logo-removebg-preview.png" // hero image floating top-right
        alt="Hero"
        className="hero-img"
      />
    </header>
  );
}
