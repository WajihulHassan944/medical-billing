'use client';
import './Services.css';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  LuClipboardList,
  LuBadgePercent,
  LuDollarSign,
  LuShieldCheck,
  LuFileCheck
} from 'react-icons/lu';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const serviceCategories = [
  'End-to-End Billing Solutions',
  'Claims Accuracy',
  'Front-End Services',
  'Coding Compliance',
  'Reimbursement Recovery',
  'Practice Optimization',
  'Legal & Data Security',
  'Financial Intelligence'
];

// Updated detailed service cards data
const serviceData = [
  {
    icon: <LuClipboardList />,
    image: '/assets/doctors/service-1.jpg',
    title: 'Claims Accuracy',
    description:
      'Accurate claim processing and submission to maximize reimbursement and reduce denials across all payers.'
  },
  {
    icon: <LuBadgePercent />,
    image: '/assets/doctors/service-2.jpg',
    title: 'Front-End Services',
    description:
      'Ensure coverage eligibility and benefits verification before services are rendered to avoid payment issues.'
  },
  {
    icon: <LuDollarSign />,
    image: '/assets/doctors/service-3.jpg',
    title: 'Financial Intelligence',
    description:
      'Streamlined workflows to improve cash flow, reduce AR days, and enhance financial performance.'
  },
  {
    icon: <LuShieldCheck />,
    image: '/assets/doctors/service-4.jpg',
    title: 'Legal & Data Security',
    description:
      'Maintain compliance with HIPAA and payer regulations through thorough audit trails and reporting.'
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/doctors/service-5.jpg',
    title: 'Reimbursement Recovery',
    description:
      'Transparent billing solutions with full-service patient support to improve collections and satisfaction.'
  }
];

const Services = () => {
  const router = useRouter();
  const scrollRef = useRef();

  // Scroll horizontally in service cards container
  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 320;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  // Navigate to service category page on click
  const navigateToCategory = (category) => {
    const encoded = encodeURIComponent(category);
    router.push(`/services?category=${encoded}`);
  };

  return (
    <section className="services-section">
      <div className="departments-panel">
        <div>
          <h2>Medical Billing</h2>
          <ul>
            {serviceCategories.map((category) => (
              <li
                key={category}
                onClick={() => navigateToCategory(category)}
                style={{ cursor: 'pointer' }}
                title={`View details about ${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
          <Link href="/ServicesPage">
            View all
          </Link>
        </div>
      </div>

      <div className="services-content">
        <div className="services-header">
          <div className="title-group">
            <span className="tag">Trusted by Clinics</span>
            <h2>Our Services</h2>
          </div>
          <div className="scroll-buttons">
            <button onClick={() => scroll('left')}>
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll('right')}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="services-scroll" ref={scrollRef}>
          {serviceData.map((service, idx) => (
            <div
              className="service-card"
              key={idx}
              onClick={() => navigateToCategory(service.title)}
              style={{ cursor: 'pointer' }}
              title={`Learn more about ${service.title}`}
            >
              <div className="image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="overlay-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
