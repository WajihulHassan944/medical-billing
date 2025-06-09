'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './PatientSchedulingBanner.css';
import HelpPopup from '@/app/Home/ContactPopup/ContactPopup'; // Make sure this path is correct

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Need Reliable 24/7 Patient Scheduling Services?',
  subtitle = 'Partner with CareWatch for expert, affordable scheduling solutions that ensure seamless appointment management and improve patient satisfaction.',
  buttonText = "Get Started Today ➞"
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="scheduling-banner">
      <div className="scheduling-icon">
        <Image src={icon} alt="Scheduling Icon" width={48} height={48} />
      </div>

      <div className="scheduling-content">
        <h3 className="scheduling-title">{title}</h3>
        <p className="scheduling-subtitle">{subtitle}</p>
      </div>

      <div className="scheduling-cta">
        <button className="scheduling-button" onClick={() => setShowPopup(true)}>
          {buttonText}
        </button>
        {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default PatientSchedulingBanner;
