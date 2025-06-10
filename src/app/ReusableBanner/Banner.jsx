'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './banner.css';

const pathToTitleMap = {
  '/services': 'Medical Billing & Coding Services',
  '/service-2': 'Physicians Credentialing Services',
  '/service-3': 'Revenue Cycle Management',
  '/service-4': 'AR & Denial Management Services',
  '/service-5': 'Medical Billing & Coding Audit',
  '/service-6': 'Verification & Prior Authentication',
  '/service-7': 'Contact Center & Patient Scheduling',
};

const Banner = ({ title }) => {
  const pathname = usePathname();
  const matchedTitle = pathToTitleMap[pathname] || title || 'Our Services';

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: matchedTitle, active: true },
  ];

  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">{matchedTitle}</h1>
        <p className="breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className={crumb.active ? 'breadcrumb-current' : 'breadcrumb-home'}>
              {crumb.link && !crumb.active ? (
                <Link href={crumb.link}>{crumb.label}</Link>
              ) : (
                crumb.label
              )}
              {index < breadcrumbs.length - 1 && ' / '}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Banner;
