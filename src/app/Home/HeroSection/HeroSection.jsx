import React from 'react';
import './HeroSection.css';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">Professional Medical Billing Experts</p>
          <h1 className="hero-title">
            Get Paid Faster. Focus on<br />
            What Truly Matters — Patient Care
          </h1>
       
          <div className="hero-buttons">
            <Link href="/contact"><button className="hero-btn outlined">Get a Free Consultation</button></Link>
            <Link href="/ServicesPage"><button className="hero-btn outlined">Explore Our Services</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
