import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects';
// import Gallery from '../components/Gallery';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import DarkModeToggle from '../components/DarkModeToggle';

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Header />
      <Hero />
      {/* <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
     <About />
      {/* <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default Home;