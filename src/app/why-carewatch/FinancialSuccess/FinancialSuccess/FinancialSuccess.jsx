import React from 'react';
import './FinancialSuccessSection.css';

const financialItems = [
  {
    title: "Operational Costs",
    description:
      "CareWatch helps you achieve up to 70% savings on billing-related expenses, allowing you to stay focused on delivering outstanding healthcare to your patients.",
    icon: "/assets/financial/1.png",
    colorClass: "blue-card",
  },
  {
    title: "Revenue Gain",
    description:
      "CareWatch employs smart, tech-driven billing strategies to help increase your revenue by up to 20%.",
    icon: "/assets/financial/2.png",
    colorClass: "green-card",
  },
  {
    title: "Denial Management",
    description:
      "Reduce claim denials by up to 25% with CareWatch's proven expertise in denial management and strategic growth planning.",
    icon: "/assets/financial/3.png",
    colorClass: "red-card",
  },
  {
    title: "Contract Terms",
    description:
      "Enjoy flexible, month-to-month contracts from CareWatch that adapt to your evolving operational needs — no long-term commitments required.",
    icon: "/assets/financial/4.png",
    colorClass: "dark-blue-card",
  },
];

export default function FinancialSuccessSection() {
  return (
    <section className="financial-wrapper">
      <h2 className="financial-heading">Empowering Your Financial Health with CareWatch</h2>
      <p className="financial-subheading">
        At CareWatch, our certified professionals design innovative, end-to-end billing and revenue solutions — from denial management to medical coding and prompt reimbursements — ensuring that your healthcare practice thrives financially.
      </p>
      <div className="financial-card-container">
        {financialItems.map((item, idx) => (
          <div key={idx} className={`financial-card ${item.colorClass}`}>
            <div className="financial-icon">
              <img src={item.icon} alt={item.title} className="financial-icon-img" />
            </div>
            <h3 className="financial-title">{item.title}</h3>
            <p className="financial-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}