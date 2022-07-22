import React from 'react';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services';
import UI from './pages/UI';

function App() {
  return (
    <div>
      <UI />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
