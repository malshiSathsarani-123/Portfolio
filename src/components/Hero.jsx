import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section" id="home-section">
      <div className="hero-content">
        <span className="greeting">Hello</span>
        <h1 className="name">I'm Malshi</h1>
        <p className="description">
          I approach software development instinctively —
           I build and solve problems as they come to me.
        </p>
        <a href="../assets/pff/Malshi-Sathsarani-CV.pdf" download className="cta-button">
          Download CV
        </a>
        <div className="contact-email">malshisathsarani78@gmail.com</div>
      </div>
    </div>
  );
};

export default Hero;