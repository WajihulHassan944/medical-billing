import React, { Suspense } from 'react';
import ServicesPageClient from './ServicesPageClient';

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesPageClient />
    </Suspense>
  );
}
