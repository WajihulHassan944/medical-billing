import React from 'react';
import Image from 'next/image';
import './billing-specialities.css';

const specialties = [
  { label: 'Gastroenterology Billing Services', icon: '/assets/sub-services/2.png' },
  { label: 'Physical Therapy Billing Services', icon: '/assets/sub-services/1.png' },
  { label: 'Pediatric Medical Billing Services', icon: '/assets/sub-services/5.png' },
  { label: 'Pain Management Billing Services', icon: '/assets/sub-services/7.png' },
  { label: 'Internal Medicine Billing Services', icon: '/assets/sub-services/9.png' },
  { label: 'Plastic Surgery Billing Services', icon: '/assets/sub-services/11.png' },
  { label: 'Radiation Oncology Billing Services', icon: '/assets/sub-services/13.png' },
  { label: 'Otolaryngology Billing Services', icon: '/assets/sub-services/10.png' },
  { label: 'Dermatology Billing Services', icon: '/assets/sub-services/9.png' },
  { label: 'Ophthalmology Billing Services', icon: '/assets/sub-services/10.png' },
  { label: 'Oncology Billing Services', icon: '/assets/sub-services/21.png' },
  { label: 'Cardiology Billing Services', icon: '/assets/sub-services/1.png' },
  { label: 'Neurosurgery Billing Services', icon: '/assets/sub-services/4.png' },
  { label: 'Chiropractic Billing Services', icon: '/assets/sub-services/6.png' },
  { label: 'Behavioral Health Billing', icon: '/assets/sub-services/8.png' },
  { label: 'Orthopedic Billing Services', icon: '/assets/sub-services/16.png' },
  { label: 'Vascular Surgery Billing Services', icon: '/assets/sub-services/12.png' },
  { label: 'Urology Billing Services', icon: '/assets/sub-services/14.png' },
  { label: 'Radiology Billing Services', icon: '/assets/sub-services/16.png' },
  { label: 'Anesthesiology Billing Services', icon: '/assets/sub-services/18.png' },
  { label: 'General Surgery Billing Services', icon:'/assets/sub-services/20.png' },
  { label: 'Colon and Rectal Billing Services', icon: '/assets/sub-services/22.png' },
];

const BillingSpecialties = () => {
  return (
    <div className="billing-specialties-container">
      <h2 className="billing-title">
        Explore the Medical Specialties We Support with Expert Billing Services
      </h2>
      <p className="billing-subtitle">
        Our Experienced Team Delivers Accurate, Efficient Prior Authorization Across a Range of Specialties
      </p>
      <p className="billing-highlight">
        Need Reliable Prior Authorization Support? Contact Us to Streamline Your Medical Billing Workflow
      </p>
      <div className="billing-grid">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="billing-item"
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={40}
              height={40}
              className="billing-icon"
            />
            <p className="billing-label">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingSpecialties;
