'use client';

import { useSearchParams } from 'next/navigation';
import './Details.css';
import ServicesSidebar from './ServicesSidebar';
import MedicalBillingFlow from '../MedicalBillingflow/MedicalBillingFlow';
import PatientSchedulingBanner from '../patientScheduling/patientscheduling';
import HomePage from '../MedicalBillingHighlight';
import BillingSpecialties from '../servicecetagory/billing-specialities';

const servicesDetails = [
  {
    category: 'AR & Denial Management Services',
  title: 'Transform Denials into Dollars with Expert Denial & AR Management',
  image: '/assets/doctors/service-4.jpg',
  description: [
    `CareWatch specializes in comprehensive Denial and Accounts Receivable (AR) Management services tailored to reduce denials, enhance cash flow, and maximize revenue recovery for healthcare providers.`,

    `Our experienced team performs thorough root cause analyses of claim denials, identifies errors promptly, and implements effective strategies such as timely claim resubmissions, appeals, and diligent follow-ups. We monitor every claim from submission through payment, offering clear updates and actionable insights.`,

    `By leveraging advanced technology alongside a compassionate, provider-focused approach, CareWatch helps minimize revenue loss, prevent future denials, and streamline your revenue cycle — so you can concentrate on delivering outstanding patient care.`,
  ],
  servicesList: [
    'Comprehensive Claim Tracking & Status Updates',
    'In-Depth Root Cause Denial Analysis & Correction',
    'Strategic Claim Adjustments & Timely Resubmissions',
    'Handling Partial Payments & Denial Appeals',
    'Proactive AR Follow-Ups & Revenue Recovery Solutions',
  ],
  },
];

export default function Details() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'End-to-End Billing Solutions';

  // Find the service detail matching the category (case insensitive)
  const service = servicesDetails.find(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  ) || servicesDetails[0]; // fallback to first if no match

  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <img src={service.image} alt={service.title} className="top-image" />
        <h2>{service.title}</h2>
        {service.description.map((para, idx) => (
          <p key={idx}>{para}</p>
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

<MedicalBillingFlow/>
          <PatientSchedulingBanner/>
        <HomePage/>
            
             <BillingSpecialties/>

      </div>
    </div>
  );
}
