import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">UrbanTech</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <div className="nav-icons">🛒 ❤️ 👤</div>
    </nav>
  );
}

export default Navbar;