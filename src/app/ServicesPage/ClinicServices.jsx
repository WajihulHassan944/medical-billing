'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const services = [
  {
    title: 'Medical Billing & Coding Services',
    slug: 'services',
    image: '/assets/doctors/service-1.jpg',
  },
  {
    title: 'Physicians Credentialing Services',
    slug: 'service-2',
    image: '/assets/doctors/service-2.jpg',
  },
  {
    title: 'Revenue Cycle Management',
    slug: 'service-3',
    image: '/assets/doctors/service-3.jpg',
  },
  {
    title: 'AR & Denial Management Services',
    slug: 'service-4',
    image: '/assets/doctors/service-4.jpg',
  },
  {
    title: 'Medical Billing & Coding Audit',
    slug: 'service-5',
    image: '/assets/doctors/service-5.jpg',
  },
  {
    title: 'Verification & Prior Authentication',
    slug: 'service-6',
    image: '/assets/services/one.jpg',
  },
  {
    title: 'Contact Center & Patient Scheduling',
    slug: 'service-7',
    image: '/assets/home/one.jpg',
  },
];

export default function ClinicServices() {
  const router = useRouter();

  const handleCardClick = (slug) => {
    router.push(`/${slug}`);
  };

  const handleKeyDown = (e, slug) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(`/${slug}`);
    }
  };

  return (
    <div className="grid-container">
      {services.map((service, index) => (
        <div
          key={index}
          className="card cursor-pointer"
          onClick={() => handleCardClick(service.slug)}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => handleKeyDown(e, service.slug)}
          style={{ cursor: 'pointer' }}
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
          </div>
        </div>
      ))}
    </div>
  );
}
