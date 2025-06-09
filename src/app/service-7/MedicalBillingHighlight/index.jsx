'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
      title="Why CareWatch’s Medical Billing and Coding Services Excel"
      paragraphs={[
        "At CareWatch, we know that even small errors in medical billing and coding can have major financial impacts. That’s why we employ certified, experienced professionals dedicated to delivering precise, compliant billing services to healthcare providers across the nation.",
        "Our collaborative approach ensures your unique needs are met with accuracy and transparency. We proactively optimize claim submissions to maximize reimbursements while adhering to the latest industry standards and regulations.",
        "With 24/7 secure online access and responsive client support, you stay fully informed and in control of your revenue cycle, enabling smarter decisions and improved financial outcomes for your practice.",
      ]}
      buttonText="Get in Touch"
      buttonLink="/contact"
      badgeText="Trusted by 150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
);
}