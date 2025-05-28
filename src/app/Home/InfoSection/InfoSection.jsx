import React from 'react';
import './InfoSection.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="contact-row">
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <div>
            <p className="label">Call Our Experts</p>
            <p className="value">1-888-123-4567</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div>
            <p className="label">Email Us Anytime</p>
            <p className="value">support@carewatchbilling.com</p>
          </div>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <div>
            <p className="label">Our Office</p>
            <p className="value">3213 Suitland Street, Suite 100, MD</p>
          </div>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-box box1">
          <h3>Certified Billing Specialists</h3>
          <p>
            Our certified and experienced medical billing and coding professionals help streamline your revenue cycle, reduce denials, and maximize reimbursements with precision and compliance.
          </p>
          <button>Learn More</button>
        </div>

        <div className="info-box box2">
          <h3>24/7 Support & Services</h3>
          <p>
            CareWatch offers 24/7 support to healthcare providers nationwide, ensuring real-time claim submissions, denial management, and fast-track revenue recovery with zero downtime.
          </p>
          <button>Learn More</button>
        </div>

        <div className="info-box box3">
          <h3>Business Hours</h3>
          <div className="hours">
            <div>
              <span>Monday – Friday</span>
              <span>8:00 AM – 6:00 PM</span>
            </div>
            <div>
              <span>Saturday</span>
              <span>9:00 AM – 3:00 PM</span>
            </div>
            <div>
              <span>Sunday</span>
              <span>By Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
