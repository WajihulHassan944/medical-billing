'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const services = [
  { title: 'Comprehensive Revenue Cycle Management', category: 'End-to-End Billing Solutions', image: '/assets/doctors/service-1.jpg' },
  { title: 'Clean Claim Submission & Tracking', category: 'Claims Accuracy', image: '/assets/doctors/service-2.jpg' },
  { title: 'Patient Eligibility & Insurance Verification', category: 'Front-End Services', image: '/assets/doctors/service-3.jpg' },
  { title: 'Medical Coding & Clinical Documentation Improvement', category: 'Coding Compliance', image: '/assets/doctors/service-4.jpg' },
  { title: 'Denial Prevention, Management & Appeals', category: 'Reimbursement Recovery', image: '/assets/doctors/service-5.jpg' },
  { title: 'Practice Operations & Billing Workflow Support', category: 'Practice Optimization', image: '/assets/doctors/service-5.jpg' },
  { title: 'HIPAA Compliance & Regulatory Audits', category: 'Legal & Data Security', image: '/assets/doctors/service-1.jpg' },
  { title: 'Performance Metrics, Analytics & Reporting', category: 'Financial Intelligence', image: '/assets/doctors/service-2.jpg' },
];

export default function ClinicServices() {
  const router = useRouter();

  const handleCardClick = (category) => {
    const encodedCategory = encodeURIComponent(category);
    router.push(`/services?category=${encodedCategory}`);
  };

  return (
    <div className="grid-container">
      {services.map((service, index) => (
        <div
          key={index}
          className="card cursor-pointer"
          onClick={() => handleCardClick(service.category)}
       style={{cursor:'pointer'}}
        >
          <div className="image-wrapper">
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h3>{service.title}</h3>
            <p>{service.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
