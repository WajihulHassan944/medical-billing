'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
      title="Why Choose CareWatch for Your Medical Billing and Denial Management?"
      paragraphs={[
        "At CareWatch, we know that even small errors in Medical Billing and Denial Management can cause significant financial setbacks. That’s why we employ certified, experienced professionals dedicated to delivering expert billing services tailored for healthcare providers.",
        "Our compassionate, client-focused team partners with you to ensure accuracy, compliance, and transparency throughout your revenue cycle. With personalized strategies, we reduce denials and optimize reimbursements to strengthen your practice’s financial health.",
        "Benefit from 24/7 web-based access and ongoing client support, giving you real-time insights into your billing and accounts receivable activities. This empowers you to make informed decisions and focus on what truly matters — providing exceptional patient care.",
      ]}
      buttonText="Let’s Connect"
      buttonLink="/contact"
      badgeText="Trusted by 150+ Providers"
      mainImage="/images/money-handoff.jpg"
      overlayImage="/images/coins-hand.jpg"
    />
);
}