'use client';

import React from 'react';
import './Details.css';
import ServicesSidebar from './ServicesSidebar';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import BillingSpecialties from '../servicecetagory/billing-specialities';

export default function Details() {
  // Updated service data for Revenue Cycle Management
  const service = {
    category: 'Revenue Cycle Management',
    title: 'Revenue Cycle Management Services That Drive Real Financial Results',
    image: '/assets/doctors/service-3.jpg', // Replace with your actual image path
    description: [
      `At CareWatch, we understand the daily revenue pressures facing healthcare professionals. Our Revenue Cycle Management (RCM) services are purpose-built to reduce denials, shorten AR cycles, and optimize claim turnaround time—without burdening your staff.`,
      `We offer a complete suite of RCM solutions, from insurance verification to denial recovery and AR follow-up. By combining certified coders with intelligent automation, we streamline your revenue process, improve reimbursement rates, and minimize costly billing errors.`,
      `With real-time reporting, regulatory compliance assurance, and a dedicated support team, CareWatch empowers you to focus on patient care while we manage the financial complexities. Our goal is to help you boost revenue, enhance collection ratios, and reduce administrative overhead.`,
    ],
    servicesList: [
      'Insurance Eligibility Verification & Patient Onboarding',
      'Accurate Charge Capture & Medical Coding',
      'Claim Scrubbing, Submission, and Tracking',
      'Payment Posting, Reconciliation, and AR Follow-Up',
      'Denial Management & Appeals',
      'HIPAA-Compliant Audits & Real-Time KPI Reporting',
    ],
  };

  return (
    <div className="outpatient-container">
      <ServicesSidebar />

      <div className="content">
        <img src={service.image} alt={service.title} className="top-image" />
        <h2>{service.title}</h2>

        {service.description.map((para, idx) => (
          <p className="content-1" key={idx}>
            {para}
          </p>
        ))}

        <div className="services-grid">
          <div className="services-card">
            <h4>{service.category}</h4>
            <ul>
              {service.servicesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <MedicalBillingFlow />
        <PatientSchedulingBanner />
        <HomePage />
        <BillingSpecialties />
      </div>
    </div>
  );
}