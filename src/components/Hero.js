import React from "react";

function Hero() {
  const handleShopNow = () => {
    alert("Explore our amazing products!");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">Summer Sale</span>
        <h1>Discover Premium Electronics</h1>
        <p>Latest smartphones, laptops, and accessories at unbeatable prices.</p>
        <button onClick={handleShopNow} className="hero-btn">Shop Now →</button>
      </div>
    </section>
  );
}

export default Hero;