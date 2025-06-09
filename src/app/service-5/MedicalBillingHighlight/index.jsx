'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
      title="Why CareWatch’s Medical Billing and Coding Services Excel"
      paragraphs={[
        "At CareWatch, we know that even small errors in medical billing and coding can lead to significant financial setbacks. That’s why we employ certified, experienced professionals dedicated to delivering precise, compliant services to healthcare providers across the nation.",
        "Our collaborative approach means we tailor our services to your unique needs, ensuring accuracy and adherence to the latest industry standards. With proactive strategies, we maximize your revenue by submitting clean claims and reducing denials.",
        "Benefit from 24/7 web-based access and responsive client support, giving you real-time insight into your billing operations so you can confidently manage your revenue cycle and focus on exceptional patient care.",
      ]}
      buttonText="Let’s Connect"
      buttonLink="/contact"
      badgeText="Trusted by 150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
);
}