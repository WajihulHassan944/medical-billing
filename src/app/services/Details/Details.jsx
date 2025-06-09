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
    category: 'Medical Billing & Coding Services',
    title: 'CareWatch: Precision-Driven Revenue Cycle Management',
    image: '/assets/doctors/service-1.jpg',
    description: [
      `At CareWatch, we understand that even minor errors in medical billing and coding can cause major financial setbacks. That’s why we employ certified and experienced professionals dedicated to delivering exceptional medical billing and coding services to healthcare providers nationwide.`,
      `Our team collaborates closely with you to tailor solutions that ensure precision and compliance. With proactive strategies, we focus on maximizing your financial outcomes by submitting accurate claims and consistently meeting industry standards.`,
      `Enjoy 24/7 web-based access and responsive client support, giving you real-time insights into your financial and billing activities. CareWatch empowers you to make informed decisions for optimized revenue cycle management and sustained financial success.`,
    ],
    servicesList: [
      'Certified Professional Medical Billing & Coding',
      'Accurate Claims Preparation and Submission',
      'Compliance with Industry Standards and Regulations',
      'Real-Time Financial Reporting & Analytics',
      'Dedicated Client Support and Consultation',
    ],
  },
  // ... other services remain unchanged or similarly updated as needed
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
