'use client';
import Image from "next/image";
import { useState } from "react";
import HelpPopup from "@/app/Home/ContactPopup/ContactPopup"; // adjust the path if needed
import "./MedicalBillingFlow.css";

export default function MedicalBillingFlow() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="medical-billing-section">
      <h2 className="section-title">
        Transforming Your Revenue Cycle with Expert Denial & AR Management!
      </h2>

      <div className="content-container">
        <div className="text-content">
          <p>
            Behind every successful medical billing process lies meticulous claim tracking, timely submissions, and proactive denial management. From patient registration to final payment, each step directly impacts your practice’s financial well-being.
          </p>

          <p>
            Our expert team quickly identifies and addresses denials, implements strategic claim adjustments, and manages prompt resubmissions. We provide transparent updates and actionable insights to ensure your cash flow remains uninterrupted and compliant with healthcare standards.
          </p>

          <p>
            Partner with CareWatch to turn denials into dollars, optimize your revenue cycle, and allow you to focus on delivering exceptional patient care.
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
