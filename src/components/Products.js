import React from "react";
import products from "../data/products";

function Products() {
  const featured = products.slice(0, 4);

  const handleViewProduct = (name) => {
    alert(`View details of ${name}`);
  };

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featured.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleViewProduct(product.name)}>View Product</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;