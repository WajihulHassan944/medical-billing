'use client';
import './Services.css';
import { useRouter, usePathname } from 'next/navigation';
import {
  LuClipboardList,
  LuBadgePercent,
  LuDollarSign,
  LuShieldCheck,
  LuFileCheck,
} from 'react-icons/lu';

const serviceData = [
  {
    icon: <LuClipboardList />,
    image: '/assets/doctors/service-1.jpg',
    title: 'Medical Billing & Coding Services',
    slug: 'services',
    description: 'Streamlined medical billing and accurate coding to maximize reimbursements.',
  },
  {
    icon: <LuBadgePercent />,
    image: '/assets/doctors/service-2.jpg',
    title: 'Physicians Credentialing Services',
    slug: 'service-2',
    description: 'Fast and reliable credentialing to ensure timely physician onboarding.',
  },
  {
    icon: <LuDollarSign />,
    image: '/assets/doctors/service-3.jpg',
    title: 'Revenue Cycle Management',
    slug: 'service-3',
    description: 'Optimize revenue flow from appointment to final payment collection.',
  },
  {
    icon: <LuShieldCheck />,
    image: '/assets/doctors/service-4.jpg',
    title: 'AR & Denial Management Services',
    slug: 'service-4',
    description: 'Reduce account receivables and recover denied claims efficiently.',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/doctors/service-5.jpg',
    title: 'Medical Billing & Coding Audit',
    slug: 'service-5',
    description: 'Identify errors and improve compliance through detailed audits.',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/services/one.jpg',
    title: 'Verification & Prior Authentication',
    slug: 'service-6',
    description: 'Ensure patient eligibility and authorization before service delivery.',
  },
  {
    icon: <LuFileCheck />,
    image: '/assets/home/one.jpg',
    title: 'Contact Center & Patient Scheduling',
    slug: 'service-7',
    description: 'Professional patient engagement and appointment scheduling support.',
  },
];

const Services = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToCategory = (slug) => {
    router.push(`/${slug}`);
  };

  return (
    <section className="services-section" key={pathname}>
      <div className="services-content">
        <div className="services-header">
          <div className="title-group">
            <span className="tag">Trusted by Clinics</span>
            <h2>Our Services</h2>
          </div>
        </div>

        <div className="services-grid">
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
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
