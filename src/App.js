import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Footer from './component/Footer';
import './App.css';
import Signup from "./pages/Signup";
import Signin from "./component/auth/Signin";
import AddProduct from './component/product/AddProduct';
import EditProduct from './component/product/EditProduct';
import ListProducts from './component/product/ListProducts';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Signin" element={<Signin />}/>
          <Route path="/products/add" element={<AddProduct />}></Route>
          <Route path="/products/edit/:id" element={<EditProduct />}></Route>
          <Route path="/products/list" element={<ListProducts />}></Route>
          <Route element={<NoPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
