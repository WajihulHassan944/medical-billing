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
        Our Streamlined Process to Maximize Your Medical Billing Success
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            Behind every smooth medical billing cycle is a carefully orchestrated process starting with accurate patient registration and insurance verification. These foundational steps ensure your practice is set up for financial success from the start.
          </p>

          <p>
            Once care is delivered, our expert coding team meticulously translates clinical documentation into precise CPT, ICD, and HCPCS codes, capturing the full scope of services rendered with accuracy and compliance.
          </p>

          <p>
            Claims are then thoroughly reviewed and scrubbed for errors before submission to payers via secure channels. Our proactive monitoring identifies and resolves discrepancies swiftly to keep your cash flow steady. From initial documentation to efficient denial management, CareWatch is committed to transparency, compliance, and getting you paid promptly.
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
