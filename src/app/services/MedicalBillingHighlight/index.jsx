'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
title="Why CareWatch Stands Out in Medical Billing and Coding Services"
paragraphs={[
"At CareWatch, we understand that even minor errors in medical billing and coding can lead to significant financial disruptions. That's why we prioritize hiring certified and experienced professionals to deliver exceptional billing solutions tailored to healthcare providers nationwide.",
"Our dedicated team collaborates closely with your practice to ensure accuracy, compliance, and proactive strategies that enhance your financial performance. We focus on clean claim submissions, reduced denials, and adherence to industry standards to help you maximize reimbursements.",
"With 24/7 web-based access and real-time support, CareWatch gives you full visibility into your financial operations, empowering informed decisions and effective revenue cycle management for your practice.",
]}
buttonText="Let’s Connect"
buttonLink="/contact"
badgeText="150+ Providers"
mainImage="/images/money-handoff.jpg"
overlayImage="/images/coins-hand.jpg"
/>
);
}