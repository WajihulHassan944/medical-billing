'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './PatientSchedulingBanner.css';
import HelpPopup from '@/app/Home/ContactPopup/ContactPopup';

const PatientSchedulingBanner = ({
  icon = '/assets/sub-services/23.png',
  title = 'Streamline Your Patient Scheduling with CareWatch',
  subtitle = 'CareWatch offers cost-effective and expert patient scheduling services designed to optimize your front-office workflow and enhance patient satisfaction. Connect with us today!',
  buttonText = "Let’s Connect ➞",
  onButtonClick = () => {},
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    onButtonClick();
  };

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
        <button className="scheduling-button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PatientSchedulingBanner;
