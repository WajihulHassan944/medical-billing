'use client';
import Image from 'next/image';
import { useState } from 'react';
import './burger.css';
import TeamImage from '../../../../../public/assets/team.png'; // Optional: You can also place it in /app/assets if preferred
import HelpPopup from '@/app/Home/ContactPopup/ContactPopup'; // Ensure this path is correct

export default function BurgureBillingSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="medical-billing-section">
      <div className="medical-billing-content">
        <h2 className="medical-billing-heading">
          Pro Medical Billing Solutions Implements Technology-Enabled Innovative Strategies
        </h2>
        <p className="medical-billing-paragraph">
          We are your reliable partner in the healthcare industry, paying meticulous attention to
          refining every aspect of Medical Billing and Coding Services. Our team of professionals
          manages all facets of your organization ranging from coding and denial management to
          ensuring swift reimbursement and thorough follow-up. Based on our expertise and resources,
          we understand much better how to effectively handle billing challenges regardless of the
          size or specialization of your practice.
        </p>
        <button
          className="medical-billing-button"
          onClick={() => setShowPopup(true)}
        >
          Let&apos;s Connect
        </button>
      </div>

      {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}

      <div className="medical-billing-image-container">
        <Image
          src={TeamImage}
          alt="Team working on medical billing solutions"
          className="medical-billing-image"
        />
      </div>
    </section>
  );
}
