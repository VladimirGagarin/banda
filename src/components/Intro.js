import React from 'react';
import '../App.css';

export default function Intro() {
  return (
    <header className="intro">
      <img
        src="../images/logo4.png" // your centered logo
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
