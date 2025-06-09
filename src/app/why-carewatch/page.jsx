'use client';
import React from 'react';
import AppointmentEveryPage from './AppointmentEveryPage/AppointmentEveryPage';
import PatientSchedulingBanner from './patientScheduling/patientscheduling';
import HeroSection from './HeroSection/HeroSection';
import BillingSpecialties from './servicecetagory/billing-specialities';
import "./care.css"
import Technologies from './Technologies/Technologies';
import FinancialSuccessSection from './FinancialSuccess/FinancialSuccess/FinancialSuccess';

const Dashboard = () => {
  return (
    <div>
      <HeroSection/>
      <AppointmentEveryPage />
      <FinancialSuccessSection/>
      <PatientSchedulingBanner/>
      <BillingSpecialties/>
      <Technologies/>
    </div>
  );
};

export default Dashboard;
