import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to FreshMart</h1>
          <p>Your one-stop grocery destination — fresh, fast, and affordable!</p>
          <Link to="/Veg">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/images/home.png" alt="Grocery Banner" />
        </div>
      </header>

      <section className="homepage-categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/Veg" className="category-card">🥦 Vegetables</Link>
          <Link to="/NonVeg" className="category-card">🍗 Non-Veg</Link>
          <Link to="/Milk" className="category-card">🥛 Milk</Link>
          <Link to="/Chocolate" className="category-card">🍫 Chocolates</Link>
        </div>
      </section>

      <section className="homepage-benefits">
        <h2>Why Choose Us?</h2>
        <div className="benefit-grid">
          <div className="benefit-card">
            <h3>🚀 Fast Delivery</h3>
            <p>Groceries at your doorstep in under 60 minutes.</p>
          </div>
          <div className="benefit-card">
            <h3>🌱 Fresh Products</h3>
            <p>Daily-sourced and quality-checked goods.</p>
          </div>
          <div className="benefit-card">
            <h3>💳 Easy Payments</h3>
            <p>Secure checkout with multiple payment options.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
