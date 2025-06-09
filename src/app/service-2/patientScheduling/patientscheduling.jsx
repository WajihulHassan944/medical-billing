'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './PatientSchedulingBanner.css';
import HelpPopup from '@/app/Home/ContactPopup/ContactPopup'; // Adjust path if needed

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Streamline Your Patient Scheduling with CareWatch',
  subtitle = 'Deliver a better patient experience and reduce no-shows with our reliable, HIPAA-compliant scheduling services—customized for your workflow.',
  buttonText = "Schedule a Free Demo ➞",
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
      </div>

      {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PatientSchedulingBanner;
