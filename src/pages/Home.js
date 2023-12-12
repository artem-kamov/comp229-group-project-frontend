import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h2>Welcome to the Used Product Marketplace!</h2>
      <p>
        Explore our platform to buy and sell a wide range of used products. <br />
        Whether you're looking for electronics, furniture, clothing, or more, you'll find great deals from our community.
      </p>
      <p>
        Ready to declutter your space or find a hidden gem? <br />
        Start browsing or selling now!
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/products/list')}>
        AVAILABLE PRODUCTS
      </button>
    </div>
  );
}

export default Home;