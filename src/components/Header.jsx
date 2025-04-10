import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">Malshi.</div>
        
        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <Link to="/about" className="nav-link">About</Link>
          <a href="/about" className="nav-link">Skills</a>
          <a href="/gallery" className="nav-link">Projects</a>
          <a href="/blog" className="nav-link">Gallery</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;