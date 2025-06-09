'use client';
import Image from "next/image";
import { useState } from "react";
import HelpPopup from "@/app/Home/ContactPopup/ContactPopup"; // Adjust the path if needed
import "./MedicalBillingFlow.css";

export default function MedicalBillingFlow() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        CareWatch’s Streamlined Process for Medical Billing & Prior Authorization
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            At CareWatch, we understand that the foundation of a healthy revenue cycle starts with accurate patient registration and thorough verification of insurance benefits. These critical first steps ensure smooth claim submission and reduce costly denials.
          </p>

          <p>
            After care delivery, our experienced coding specialists precisely translate clinical documentation into CPT, ICD, and HCPCS codes, maintaining compliance with industry standards. We then rigorously review claims to eliminate errors before submission, ensuring faster approvals and reliable payments.
          </p>

          <p>
            Our team also expertly manages prior authorizations, securing timely insurance approvals to avoid delays in patient care and revenue disruption. Through continuous monitoring and proactive denial management, CareWatch guarantees a transparent, efficient, and patient-centered billing experience.
          </p>

          <button className="start-button" onClick={() => setShowPopup(true)}>
            Let's Get Started
          </button>

          {showPopup && <HelpPopup onClose={() => setShowPopup(false)} />}
        </div>

        <div className="image-container">
          <Image
            src="/assets/sub-services/25.png"
            alt="CareWatch Revenue Cycle Management Diagram"
            width={500}
            height={500}
            className="responsive-image"
          />
        </div>
      </div>
    </section>
  );
}
