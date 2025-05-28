import React from 'react' 
import InfoSection from './Home/InfoSection/InfoSection'
import MedicalFeatures from './Home/MedicalFeatures/MedicalFeatures'
import Services from './Home/Services/Services'
import Testimonials from './Home/Testimonials/Testimonials'
import HeroSection from './Home/HeroSection/HeroSection'
import AppointmentForm from './Home/AppointmentFAQ/AppointmentFAQ'

const page = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <MedicalFeatures />
      <div className='line'></div>
      <Services />
      <Testimonials />

      {/* Add ID here */}
      <div id="appointment">
        <AppointmentForm />
      </div>
    </div>
  )
}

export default page
