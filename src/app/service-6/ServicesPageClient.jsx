'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import './services.css';
import Banner from '../ReusableBanner/Banner';
import Details from './Details/Details';

const ServicesPageClient = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'Outpatient Surgery';

  return (
    <div>
      <Banner
        title={category}
        breadcrumbs={[
          { label: 'Home', active: false },
          { label: category, active: true },
        ]}
      />
      <Details />
    </div>
  );
};

export default ServicesPageClient;
