'use client';

import MedicalBillingHighlight from "./MedicalBillingHighlight";

export default function HomePage() {
return (
<MedicalBillingHighlight
title="Why Healthcare Providers Trust CareWatch for Medical Billing"
paragraphs={[
"At CareWatch, we go beyond the numbers. Our Medical Billing and Coding services are designed to reduce claim errors, eliminate payment delays, and boost your revenue performance—all while maintaining full regulatory compliance.",
"We employ certified billing professionals who work closely with your practice to understand its unique workflows. Every claim is thoroughly reviewed and coded for accuracy, ensuring maximum reimbursement and minimal denials.",
"With secure 24/7 access to your billing data, transparent reporting, and dedicated support, we empower healthcare providers to stay financially healthy while focusing on patient care."
]}
buttonText="Get a Free Consultation"
buttonLink="/contact"
badgeText="Trusted by 150+ Providers"
mainImage="/images/money-handoff.jpg"
overlayImage="/images/coins-hand.jpg"
/>
);
}