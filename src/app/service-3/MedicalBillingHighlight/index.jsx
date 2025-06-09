'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
      title="Why Choose Our Revenue Cycle Management Services?"
      paragraphs={[
        "At CareWatch, we know that even small errors in medical billing and coding can impact your financial health. That’s why we employ certified experts dedicated to delivering precise, reliable services tailored to your practice.",
        "Our team partners with you to ensure accuracy, compliance, and proactive management — helping you capture maximum revenue while reducing denials and delays.",
        "With 24/7 secure online access and responsive client support, you have full visibility and control over your billing cycle, empowering smarter decisions and stronger financial performance.",
      ]}
      buttonText="Let’s Connect"
      buttonLink="/contact"
      badgeText="Trusted by 150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
);
}