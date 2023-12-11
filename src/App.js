import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './component/Footer';
import './App.css';
import Signin from "./component/user/Signin";
import AddProduct from './component/product/AddProduct';
import EditProduct from './component/product/EditProduct';
import ListProducts from './component/product/ListProducts';
import NoPage from './pages/NoPage';
import Registration from './component/user/Register';
import PrivateRoute from './component/auth/PrivateRoute';
import EditProfile from './component/user/EditProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/register" element={<Registration />} />
          <Route path="/users/signin" element={<Signin />} />
          <Route path="/users/list" element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }></Route>
          <Route path="/products/add" element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }></Route>
          <Route path="/products/edit/:id" element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }></Route>
          <Route path="/products/list" element={
            <PrivateRoute>
              <ListProducts />
            </PrivateRoute>
          }></Route>
          <Route element={<NoPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
