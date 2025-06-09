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
    category: 'Credentialing Services for Healthcare Providers',
    title: 'Effortless Medical Credentialing Services Built for Speed and Accuracy',
    image: '/assets/doctors/service-2.jpg',
    description: [
      'At CareWatch, our Medical Credentialing Specialists bring years of experience supporting healthcare providers and facilities. We ensure full compliance with industry standards while eliminating errors and delays. Our transparent and efficient credentialing system accelerates the process, helping you see patients sooner and grow your practice with confidence.',
      'We handle the full credentialing lifecycle—from profile setup and document collection to insurance enrollment and contract finalization. Using secure cloud-based tools, our expert team manages every step and provides updates in real time. Our streamlined approach ensures faster approvals, better payer negotiations, and seamless onboarding.',
      'Whether you\'re a physician, therapist, or diagnostic facility, our credentialing solutions are tailored to your specific needs. Partner with CareWatch to stay compliant, gain payer trust, and open the door to broader patient access and revenue growth.',
      'Credentialing Process:',
      '1. Profile Login Analysis - We access and update CAQH profiles or create new ones to ensure your provider information is complete and ready for enrollment.',
      '2. Document Collection - All client documents are securely uploaded and stored in a HIPAA-compliant environment with encrypted, password-protected access.',
      '3. Project Management - Each credentialing case is treated as a dedicated project—tracked using secure, cloud-based software to maintain transparency and progress.',
      '4. Application Submission - Our team gathers required documents and submits enrollment applications swiftly, ensuring all payer requirements are met from the start.',
      '5. Follow-Ups - We manage end-to-end communication, track application status, respond to additional requests, and keep providers informed at every step.',
      '6. Contract Finalization - Once approved, we coordinate contract uploads, store signed copies securely, and help negotiate competitive reimbursement rates.',
      'Licensing & Compliance Support:',
      '• State Medical Licenses - Guidance through state-specific licensing and renewals.',
      '• DEA Certificate & Renewal - Support in obtaining and maintaining DEA registration for controlled substance prescriptions.',
      '• CLIA Registration - Full management of CLIA lab applications to ensure quick approvals and compliance.',
      'Credentialing for Every Healthcare Provider:',
      '• Physicians - Accelerated credentialing for network access and revenue growth.',
      '• PAs/NPs - Empowering advanced practice providers to expand reach and independence.',
      '• Hospitals - Streamlined onboarding and claims readiness for large systems.',
      '• PT/OT/SLP - Quick panel enrollment for therapy professionals to serve more patients.',
      '• Podiatrists (DPM) - Enhanced professional recognition through specialized credentialing.',
      '• Chiropractors - Insurance panel access and patient trust through compliant credentialing.',
      '• Ambulatory Surgery Centers (ASC) - Ensuring your facility meets payer and safety standards.',
      '• Urgent Care Facilities - Fast-tracked credentialing for critical access and insurer alignment.',
      '• Diagnostic Testing Facilities - Full credentialing for lab compliance and patient service scalability.',
      '• Optometrists, Audiologists - Wider access to care through tailored credentialing services.',
      '• Behavioral Health Providers - Insurance participation for mental health providers delivering essential care.'
    ],
    servicesList: [
      'CAQH Profile Creation & Management',
      'Secure Document Collection & Storage',
      'Application Submission & Insurance Enrollment',
      'Ongoing Follow-ups & Payer Communication',
      'Contract Negotiation & Credentialing Finalization',
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
