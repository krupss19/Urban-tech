import React from "react";

function Categories() {
  const categories = [
    "Mobiles", "Laptops", "Smart Watches", "Audio", "Gaming", "Accessories"
  ];

  const handleCategoryClick = (cat) => {
    alert(`Explore ${cat} products`);
  };

  return (
    <section className="categories">
      <h2>Shop By Category</h2>
      <div className="category-container">
        {categories.map((cat) => (
          <div key={cat} className="category-card" onClick={() => handleCategoryClick(cat)}>
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;