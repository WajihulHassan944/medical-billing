'use client';
import { useState } from "react";
import Image from "next/image";
import './Clinic.css';

const AccordionItem = ({ title, content, isOpen, toggle }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={toggle}>
      <h4>{title}</h4>
      <span>{isOpen ? "−" : "+"}</span>
    </div>
    {isOpen && <p className="accordion-content">{content}</p>}
  </div>
);

export default function MedicalClinic() {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      title: "Who we are?",
      content: `CareWatch is a trusted medical billing and consultancy firm, specializing in outpatient surgery billing, claims processing, and administrative healthcare support. We partner with clinics and providers to ensure seamless operations and accurate reimbursements.`,
    },
    {
      title: "Our Services",
      content: `From end-to-end billing support and insurance verification to claims submission and appeals, CareWatch simplifies complex workflows for healthcare providers, enabling better patient care and faster payments.`,
    },
    {
      title: "Qualified Experts",
      content: `Our team is comprised of experienced medical billing specialists, certified coders, and healthcare consultants who stay updated with the latest compliance standards and payer guidelines to deliver unmatched results.`,
    },
  ];

  return (
    <div className="clinic-container">
      <h5 className="subtitle-1">Professionals</h5>
      <h2 className="title-1">Welcome to CareWatch Medical Billing Services</h2>
      <div className="clinic-content">
        <div className="clinic-image">
          <Image src="/assets/about/2.png" alt="CareWatch Office" width={500} height={300} />
        </div>
        <div className="clinic-info">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
