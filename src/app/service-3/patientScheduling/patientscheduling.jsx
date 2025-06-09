'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './PatientSchedulingBanner.css';
import HelpPopup from '@/app/Home/ContactPopup/ContactPopup';

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Seamless and Reliable Patient Scheduling Services',
  subtitle = 'Experience efficient, affordable, and expert patient scheduling solutions that simplify your workflow and enhance patient satisfaction.',
  buttonText = "Connect with Us ➞",
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
        <button
          className="scheduling-button"
          onClick={() => setShowPopup(true)}
        >
          {buttonText}
        </button>
        {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default PatientSchedulingBanner;
