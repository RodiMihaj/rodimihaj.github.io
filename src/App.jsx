import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dns from './pages/Dns';
import Https from './pages/Https';
import PhishingQuiz from './pages/PhishingQuiz';
import Tools from './pages/Tools';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dns" element={<Dns />} />
          <Route path="/https" element={<Https />} />
          <Route path="/phishing-quiz" element={<PhishingQuiz />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
