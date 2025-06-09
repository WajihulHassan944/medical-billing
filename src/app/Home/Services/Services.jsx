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
  {
    name: 'Medical Billing & Coding Services',
    slug: 'services',
  },
  {
    name: 'Physicians Credentialing Services',
    slug: 'service-2',
  },
  {
    name: 'Revenue Cycle Management',
    slug: 'service-3',
  },
  {
    name: 'AR & Denial Management Services',
    slug: 'service-4',
  },
  {
    name: 'Medical Billing & Coding Audit',
    slug: 'service-5',
  },
  {
    name: 'Verification & Prior Authentication',
    slug: 'service-6',
  },
  {
    name: 'Contact Center & Patient Scheduling',
    slug: 'service-7',
  },
];

const serviceData = [
  {
    icon: <LuClipboardList />,
    image: '/assets/doctors/service-1.jpg',
    title: 'Medical Billing & Coding Services',
    slug: 'services',
  },
  {
    icon: <LuBadgePercent />,
    image: '/assets/doctors/service-2.jpg',
    title: 'Physicians Credentialing Services',
    slug: 'service-2',
  },
  {
    icon: <LuDollarSign />,
    image: '/assets/doctors/service-3.jpg',
    title: 'Revenue Cycle Management',
    slug: 'service-3',
  },
  {
    icon: <LuShieldCheck />,
    image: '/assets/doctors/service-4.jpg',
    title: 'AR & Denial Management Services',
    slug: 'service-4',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/doctors/service-5.jpg',
    title: 'Medical Billing & Coding Audit',
    slug: 'service-5',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/services/one.jpg',
    title: 'Verification & Prior Authentication',
    slug: 'service-6',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/home/one.jpg',
    title: 'Contact Center & Patient Scheduling',
    slug: 'service-7',
  },
];

const Services = () => {
  const router = useRouter();
  const scrollRef = useRef();

  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 320;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const navigateToCategory = (slug) => {
    router.push(`/${slug}`);
  };

  return (
    <section className="services-section">
      <div className="departments-panel">
        <div>
          <h2>Medical Billing</h2>
          <ul>
            {serviceCategories.map((category) => (
              <li
                key={category.slug}
                onClick={() => navigateToCategory(category.slug)}
                style={{ cursor: 'pointer' }}
                title={`View details about ${category.name}`}
              >
                {category.name}
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
              onClick={() => navigateToCategory(service.slug)}
              style={{ cursor: 'pointer' }}
              title={`Learn more about ${service.title}`}
            >
              <div className="image-wrapper">
                <img src={service.image} alt={service.title} />
                <div className="overlay-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
