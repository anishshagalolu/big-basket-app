import React from "react";
import "./AboutUs.css"; // Scoped under .about-page

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Anish Project</h1>
        <h1>About FreshMart</h1>
        <p>Delivering freshness to your doorstep since 2024.</p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At FreshMart, our goal is simple — provide fresh, quality groceries at affordable prices,
          delivered with care and speed.
        </p>
      </section>

      <section className="about-values">
        <h2>What Sets Us Apart</h2>
        <div className="value-cards">
          <div className="value-card">
            <span role="img" aria-label="cart">🛒</span>
            <h3>Wide Selection</h3>
            <p>1000+ fresh products delivered to your home.</p>
          </div>
          <div className="value-card">
            <span role="img" aria-label="delivery">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Groceries delivered in under 60 minutes.</p>
          </div>
          <div className="value-card">
            <span role="img" aria-label="leaf">🌿</span>
            <h3>Fresh Guarantee</h3>
            <p>Partnered with local farms for fresh produce.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            

            <h3>Anish</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
  
            <h3>Harshitha</h3>
            <p>CTO</p>
          </div>
          <div className="team-card">
            <h3>Lohith</h3>
            <p>COO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
