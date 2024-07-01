import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SellPage from './components/SellPage';
import BuyPage from './components/BuyPage';
import CartPage from './components/CartPage';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/sell">Sell Products</Link></li>
            <li><Link to="/buy">Buy Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/sell" element={<SellPage />} />
            <Route path="/buy" element={<BuyPage addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;




