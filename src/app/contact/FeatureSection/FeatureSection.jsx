import React from 'react';
import { FaUser, FaHeart, FaComments } from 'react-icons/fa';
import './FeatureSection.css';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-box">
        <div className="feature-icon">
          <FaUser />
        </div>
        <div>
          <h3>Experienced Billing Experts</h3>
          <p>
            Our team of certified medical billing professionals ensures accuracy, efficiency, and compliance for every claim we process on your behalf.
          </p>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <FaHeart />
        </div>
        <div>
          <h3>We Care About Your Practice</h3>
          <p>
            At CareWatch, your success is our priority. We go beyond billing to support your operations, improve workflows, and reduce administrative burdens.
          </p>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-icon">
          <FaComments />
        </div>
        <div>
          <h3>Dedicated Client Support</h3>
          <p>
            Enjoy seamless communication with our support team. Whether it’s claims, reports, or compliance queries — we’re always ready to assist you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
