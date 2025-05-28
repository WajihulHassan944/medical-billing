'use client';
import React from 'react'
import About from './Hero/Hero';
import MedicalClinic from './MedicalClinic/MedicalClinic';
import StatsSection from './StatsSection/StatsSection';
import CareSection from './CareSection/CareSection';

const page = () => {
  return (
    <div>
      <About/>
      <MedicalClinic/>
      <StatsSection/>
      <CareSection/>
    </div>
  )
}

export default page
