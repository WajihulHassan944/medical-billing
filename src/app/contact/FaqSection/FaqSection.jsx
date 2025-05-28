'use client';
import React, { useState } from 'react';
import './FaqSection.css';

const leftFaqs = [
  {
    question: 'What services does CareWatch provide?',
    answer:
      'CareWatch specializes in medical billing, insurance verification, patient registration, and practice consultancy services tailored for healthcare providers.',
  },
  {
    question: 'How does CareWatch help reduce claim denials?',
    answer:
      'We implement a multi-step claim audit process and ensure all codes are compliant and up-to-date, drastically reducing your denial rate and improving revenue.',
  },
  {
    question: 'Is CareWatch HIPAA-compliant?',
    answer:
      'Absolutely. All our systems and procedures are designed with full HIPAA compliance in mind, ensuring the safety and confidentiality of patient information.',
  },
  {
    question: 'Do you offer services for small practices?',
    answer:
      'Yes. Whether you’re a solo practitioner or a large clinic, we provide scalable billing and administrative solutions that fit your exact needs.',
  },
];

const rightFaqs = [
  {
    question: 'How long does onboarding take?',
    answer:
      'Typical onboarding takes 3–5 business days depending on your practice size. We handle data migration, setup, and training seamlessly during this period.',
  },
  {
    question: 'Can you handle insurance verification?',
    answer:
      'Yes, CareWatch offers real-time insurance verification services to help reduce delays and ensure patient eligibility is confirmed before treatment.',
  },
  {
    question: 'Do you integrate with existing EHR systems?',
    answer:
      'We work with most major EHR platforms and offer flexible integration solutions, including custom API work if needed.',
  },
  {
    question: 'Is support available outside business hours?',
    answer:
      'Yes, our support team is available via email and emergency hotline to ensure you’re covered even after hours or during urgent cases.',
  },
];

const FaqColumn = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="faq-column">
      {faqs.map((item, index) => (
        <div key={index} className={`faq-item-contact ${index === activeIndex ? 'active' : ''}`}>
          <div className="faq-question-contact" onClick={() => toggleIndex(index)}>
            <span className="question-text-contact">{item.question}</span>
            <span className="toggle-icon">{index === activeIndex ? '−' : '+'}</span>
          </div>
          {index === activeIndex && item.answer && <div className="faq-answer-contact">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="faq-wrapper">
      <div className="faq-header">
        <span className="faq-title-contact">FAQ</span>
        <h2>Have some Questions?</h2>
      </div>
      <div className="faq-columns-contact">
        <FaqColumn faqs={leftFaqs} />
        <FaqColumn faqs={rightFaqs} />
      </div>
    </div>
  );
};

export default FaqSection;
