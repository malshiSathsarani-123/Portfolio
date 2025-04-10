import React from 'react';
import cv from '../assets/pdf/Malshi-Sathsarani-CV.pdf';


const Hero = () => {
  return (
    <div className="hero-section" id="home-section">
      <div className="hero-content">
        <span className="greeting">Hello</span>
        <h1 className="name">I'm Malshi</h1>
        <p className="description">
          I approach software development instinctively<br />
          I build and solve problems as they come to me.
        </p>
        <div className="cta-container">
          <a href={cv} download="Malshi-Sathsarani-CV.pdf" className="cta-button">
            Download CV
          </a>
          <a href="mailto:malshisathsarani78@gmail.com" className="contact-email" style={{color:'black' , marginLeft:'10px'}}>
            malshisathsarani78@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;