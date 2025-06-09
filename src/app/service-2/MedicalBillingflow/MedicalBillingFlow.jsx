'use client';
import Image from "next/image";
import "./MedicalBillingFlow.css";
import { useState } from "react";
import HelpPopup from "@/app/Home/ContactPopup/ContactPopup";

export default function MedicalBillingFlow() {
  const [showPopup, setShowPopup] = useState(false); // <-- Define the state here

  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        Our Streamlined Approach And Process Flow to Medical Billing Services!
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            At CareWatch, we understand that what happens behind the scenes in medical billing can
            significantly impact a practice’s revenue flow. We’ve seen firsthand how success is determined
            from the earliest steps—patient registration and insurance verification. These foundational
            stages set the tone for the entire billing cycle. Once a provider delivers care, our expert
            coding team translates clinical documentation into precise CPT, ICD, and HCPCS codes,
            accurately reflecting the complexity and medical necessity of each service.
          </p>

          <p>
            The process then advances to a critical stage where precision becomes non-negotiable.
            Claims are thoroughly reviewed, scrubbed for errors, and submitted through secure, compliant
            channels to the appropriate payers. Our team actively monitors every submission, addressing
            discrepancies quickly to avoid any disruption in cash flow. From documentation to denial
            management, each phase is executed with a steadfast commitment to compliance and
            transparency. This is how CareWatch ensures providers are reimbursed promptly and accurately,
            while patients experience a streamlined, trustworthy billing journey.
          </p>

          <button className="start-button" onClick={() => setShowPopup(true)}>
            Let's Get Started
          </button>

          {/* Render the popup only if showPopup is true */}
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
