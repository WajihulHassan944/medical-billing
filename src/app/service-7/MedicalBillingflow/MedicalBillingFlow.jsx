'use client';
import Image from "next/image";
import { useState } from "react";
import HelpPopup from "@/app/Home/ContactPopup/ContactPopup"; // Adjust path if needed
import "./MedicalBillingFlow.css";

export default function MedicalBillingFlow() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        Our Streamlined Process for Accurate and Efficient Medical Billing Services
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            At CareWatch, we understand that behind-the-scenes accuracy is critical to maintaining a healthy revenue cycle. It all starts with thorough patient registration and insurance verification—steps that set the foundation for smooth billing and timely reimbursement.
          </p>

          <p>
            Once care is provided, our expert coding team carefully translates clinical documentation into precise CPT, ICD, and HCPCS codes, ensuring compliance with industry standards. Claims are then meticulously reviewed, corrected for any errors, and securely submitted to payers.
          </p>

          <p>
            We actively monitor each claim’s progress, promptly addressing any discrepancies to prevent payment delays. From initial documentation through denial management, our process emphasizes transparency, compliance, and efficiency—helping healthcare providers get paid accurately and on time, while offering patients a clear, seamless billing experience.
          </p>

          <button className="start-button" onClick={() => setShowPopup(true)}>
            Let’s Get Started
          </button>

          {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
        </div>

        <div className="image-container">
          <Image
            src="/assets/sub-services/25.png"
            alt="Revenue Cycle Management Diagram"
            width={500}
            height={500}
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}
