'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaChartLine, FaFileMedical, FaDollarSign, FaUserMd } from 'react-icons/fa';
import "./AppointmentEveryPage.css";
import HelpPopup from '../ContactPopup/ContactPopup';

const AppointmentEveryPage = () => {
   const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="appointment-hero-section">
      <div className="appointment-left-content">
        <h2 className="appointment-heading">
          Get Back to What Matters - We’ve Got the Solution !
        </h2>
        <h4 className="appointment-subheading">
          Professional Medical Billing & Coding Solutions
        </h4>
        <p className="appointment-description">
          Get Professional Medical Billing & Coding Services that eliminate headaches and maximize your Revenue.
          Let us handle the complexity while you concentrate on delivering exceptional care.
        </p>

        <ul className="appointment-features">
          <li><FaChartLine className="appointment-icon" /> Increase Revenue Upto 30%</li>
          <li><FaFileMedical className="appointment-icon" /> First Pass rate 98.9%</li>
          <li><FaDollarSign className="appointment-icon" /> Get Paid 120 + Old AR</li>
          <li><FaUserMd className="appointment-icon" /> 24/7 Dedicated Experts</li>
        </ul>

        <button className="appointment-cta-button" onClick={() => setShowPopup(true)}>Get a Free Consultation</button>
      </div>
{showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
      <div className="appointment-right-content">
        <Image
          src="/assets/home/three.png"
          alt="Medical Billing & Coding"
          className="appointment-image"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
};

export default AppointmentEveryPage;
