import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo">Alime.</div>
        
        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/pages" className="nav-link">Pages</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/gallery" className="nav-link">Gallery</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;