import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import './assets/css/styles.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`body ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
