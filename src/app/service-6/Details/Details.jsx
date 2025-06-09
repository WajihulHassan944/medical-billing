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
   category: 'Verification of Benefits & Prior Authorization',
  title: 'Streamlined Verification & Prior Authorization Services for Healthcare Providers',
  image: '/assets/services/one.jpg',
  description: [
    `Verification of Benefits (VOB) and Prior Authorization (PA) are essential processes that ensure accurate insurance coverage verification and timely payer approvals, helping healthcare providers avoid costly claim denials and delays.`,

    `At CareWatch, our expert team meticulously collects patient and insurance information, verifies eligibility and benefits, and handles prior authorization submissions with precision. We reduce administrative burdens and protect your practice’s financial health by preventing payment disruptions and ensuring compliance.`,

    `Our proactive follow-up and clear communication with providers and patients guarantee a seamless experience, allowing your team to focus on delivering outstanding patient care while we manage the complexities of insurance verification and authorization.`,
  ],
  servicesList: [
    'Comprehensive Patient Insurance Eligibility Verification',
    'Detailed Benefits and Coverage Assessment',
    'Accurate Prior Authorization Submission and Tracking',
    'Regular Follow-Up with Payers to Expedite Approvals',
    'Authorization Documentation and Compliance Management',
    'Clear Communication with Providers and Patients',
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
