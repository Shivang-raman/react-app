// src/components/SellPage.js
import React, { useState } from 'react';

function SellPage() {
  const [product, setProduct] = useState({ name: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product to sell:', product);
    // Here you would typically send the product to your backend
  };

  return (
    <div>
      <h2>Sell Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <button type="submit">Sell Product</button>
      </form>
    </div>
  );
}

export default SellPage;

