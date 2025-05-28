import React from 'react';
import './hero.css';

const About = () => {
  return (
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>About CareWatch</h1>
          <p>
            At CareWatch, we specialize in simplifying outpatient surgery billing, insurance claims, and healthcare administrative processes. 
            Our dedicated team of experts ensures accurate documentation, faster reimbursements, and stress-free patient experiences. 
            With a focus on transparency and efficiency, CareWatch is your trusted partner in medical and billing consultancy.
          </p>
          <a href="#" className="btn">View All Services</a>
        </div>
      </div>
    </section>
  );
};

export default About;
