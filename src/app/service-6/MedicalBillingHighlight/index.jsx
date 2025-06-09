'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
      title="Why CareWatch’s Medical Billing and Coding Services Make a Difference"
      paragraphs={[
        "At CareWatch, we know that even small errors in medical billing and coding can lead to major financial setbacks. That’s why we employ certified, experienced professionals dedicated to delivering precise and compliant services tailored to your healthcare practice.",
        "Our collaborative approach ensures we understand your unique needs, allowing us to optimize claims accuracy and streamline processes to maximize your revenue while maintaining full regulatory compliance.",
        "With our 24/7 secure, web-based platform and responsive client support, you have real-time access to your billing data and analytics—empowering you to make confident decisions and achieve efficient revenue cycle management.",
      ]}
      buttonText="Let’s Connect"
      buttonLink="/contact"
      badgeText="Trusted by 150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
);
}