import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Footer from './component/Footer';
import './App.css';
import Signup from "./Signup";
import Login from "./Login";
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} /> 
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
