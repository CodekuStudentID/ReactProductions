import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // pastikan Tailwind directives ada di sini
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Halaman-halaman utama kamu
import Apps from './Pages/App';     // Pastikan default export di App.jsx
import About from './Pages/About';
import Mail from './Pages/Mail';

// Mounting root React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Apps />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Mail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// Optional: performance monitoring
reportWebVitals();
