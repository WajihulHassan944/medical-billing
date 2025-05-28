import React from 'react'
import ContactBanner from './ContactBanner/ContactBanner'
import ContactTop from './ContactTop/ContactTop'
import FeatureSection from './FeatureSection/FeatureSection'
import FaqSection from './FaqSection/FaqSection'

const page = () => {
  return (
    <div>
    <ContactTop />
      <ContactBanner />
      <FeatureSection />
      <FaqSection />
    </div>
  )
}

export default page
