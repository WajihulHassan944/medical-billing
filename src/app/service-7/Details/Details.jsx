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
   category: 'Contact Center & Patient Scheduling',
  title: 'Practice Operations & Billing Workflow Support',
  image: '/assets/home/one.jpg',
  description: [
    `At CareWatch, we know that efficient practice operations and optimized billing workflows are key to minimizing errors, boosting productivity, and elevating patient satisfaction. Our Practice Optimization services are customized to fit the unique needs of your healthcare organization.`,

    `We conduct thorough evaluations of your existing billing processes, administrative workflows, and technology systems to uncover bottlenecks and opportunities for enhancement. Our experts design streamlined workflows that foster better communication between clinical and administrative teams while eliminating redundant tasks.`,

    `Beyond workflow improvements, we provide comprehensive staff training on best practices and billing software tools, empowering your team to manage billing with confidence and accuracy. We also enhance patient financial communication to improve transparency, helping patients understand their responsibilities and speeding up payment collections.`,
  ],
  servicesList: [
    'In-Depth Workflow Assessment and Tailored Process Redesign',
    'Ongoing Billing Staff Training and Support',
    'Practice Management System Integration and Enhancement',
    'Clear and Compassionate Patient Financial Communication Strategies',
  ],
}
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
