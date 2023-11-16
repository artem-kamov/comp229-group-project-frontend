import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'; 
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
