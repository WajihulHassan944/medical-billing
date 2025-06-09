import React from 'react' 
import InfoSection from './Home/InfoSection/InfoSection'
import MedicalFeatures from './Home/MedicalFeatures/MedicalFeatures'
import Services from './Home/Services/Services'
import Testimonials from './Home/Testimonials/Testimonials'
import HeroSection from './Home/HeroSection/HeroSection'
import AppointmentForm from './Home/AppointmentFAQ/AppointmentFAQ'
import AppointmentEveryPage from './Home/AppointmentEveryPage/AppointmentEveryPage'
import ThirdText from './Home/ThirdText/ThirdText'
import Technologies from './Home/Technologies/Technologies'
import FinancialSuccessSection from './Home/FinancialSuccess/FinancialSuccess/FinancialSuccess'
import BurgureBillingSection from './Home/Bargursection/Bargursection/burgurbilling'

const page = () => {
  return (
    <div>
      <HeroSection />
      <AppointmentEveryPage />
      <InfoSection />
      <ThirdText />
      <MedicalFeatures />
      <FinancialSuccessSection/>
      <BurgureBillingSection/>
      <div className='line'></div>
      <Services />
      <Technologies />
      <Testimonials />

      {/* Add ID here */}
      <div id="appointment">
        <AppointmentForm />
      </div>
    </div>
  )
}

export default page
