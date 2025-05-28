'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu';
import './Details.css';

// Your service categories matching the main service details data
const serviceCategories = [
  'End-to-End Billing Solutions',
  'Claims Accuracy',
  'Front-End Services',
  'Coding Compliance',
  'Reimbursement Recovery',
  'Practice Optimization',
  'Legal & Data Security',
  'Financial Intelligence',
];

const ServicesSidebar = () => {
  const router = useRouter();

  const handleCategoryClick = (category) => {
    const encodedCategory = encodeURIComponent(category);
    router.push(`/services?category=${encodedCategory}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section department">
        <h3>Our Services</h3>
        <ul>
          {serviceCategories.map((category) => (
            <li
              key={category}
              className="clickable-category"
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: 'pointer' }}
              title={`View details about ${category}`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section hours">
        <h3>Office Hours</h3>
        <ul>
          <li>Monday - Friday: <span>9:00 AM – 6:00 PM</span></li>
          <li>Saturday: <span>10:00 AM – 2:00 PM</span></li>
          <li>Sunday: <span>Closed</span></li>
        </ul>
      </div>

      <div className="sidebar-section contact">
        <h3>Contact Us</h3>
        <p><LuMapPin /> 501 Care Plaza, Suite 204</p>
        <p><LuMail /> support@carewatchhealth.com</p>
        <p><LuPhone /> +1 (888) 555-0199</p>
      </div>
    </div>
  );
};

export default ServicesSidebar;
