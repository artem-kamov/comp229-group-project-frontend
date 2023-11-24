// Home.js
import React from 'react';
import '../component/home.css';


function Home() {
  return (
    <div className="welcome-container">
      <h2>Welcome to the Used Product Marketplace!</h2>
      <p>
        Explore our platform to buy and sell a wide range of used products. Whether you're looking
        for electronics, furniture, clothing, or more, you'll find great deals from our community.
      </p>
      <p>
        Ready to declutter your space or find a hidden gem? Start browsing or selling now!
      </p>
       {/* Use the Footer component */}
    </div>
  );
}

export default Home;
