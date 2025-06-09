'use client';
import Image from "next/image";
import "./MedicalBillingFlow.css";
import { useState } from "react";
import HelpPopup from "@/app/Home/ContactPopup/ContactPopup";

export default function MedicalBillingFlow() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        Our Streamlined Revenue Cycle Management Process for Maximum Financial Results
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            At CareWatch, we know the backbone of a healthy practice is a smooth revenue cycle. It starts with accurate patient onboarding and insurance verification—setting the stage to minimize denials and delays.
          </p>

          <p>
            After care delivery, our certified coding specialists translate clinical documentation into precise CPT, ICD, and HCPCS codes. This attention to detail ensures claims are accurate and compliant.
          </p>

          <p>
            Claims then go through rigorous scrubbing and are submitted securely to payers. Our team proactively tracks each claim, quickly resolving issues to maintain steady cash flow. From payment posting to denial management, every step is designed for transparency, compliance, and timely reimbursements.
          </p>

          <button className="start-button" onClick={() => setShowPopup(true)}>
            Let's Get Started
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
