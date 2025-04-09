import { useState } from 'react';
import Home from './pages/Home';
import './assets/css/styles.css'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`body ${darkMode ? 'dark-mode' : ''}`}>
      <Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;