'use client';

import { useSearchParams } from 'next/navigation';
import './Details.css';
import ServicesSidebar from './ServicesSidebar';

const servicesDetails = [
  {
    category: 'End-to-End Billing Solutions',
    title: 'Comprehensive Revenue Cycle Management',
    image: '/assets/doctors/service-1.jpg',
    description: [
      `Our Comprehensive Revenue Cycle Management (RCM) services provide an all-inclusive, seamless approach to managing the entire medical billing process, from patient registration to final payment collection. With extensive experience in healthcare billing, we optimize every phase to ensure accuracy, reduce errors, and expedite reimbursements, enabling healthcare providers to focus on patient care rather than administrative burdens.`,
      
      `By leveraging advanced billing technology combined with expert human oversight, we manage insurance verification, claims submission, payment posting, and accounts receivable management. Our proactive claim monitoring system identifies potential issues before they become costly delays, ensuring higher claim acceptance rates and improving overall cash flow for medical practices.`,
      
      `Additionally, our team continuously analyzes revenue cycle performance metrics and implements customized strategies that reduce denials, accelerate payment cycles, and maximize practice revenue. Partner with us for a reliable, transparent, and efficient RCM service designed to meet the specific needs of your healthcare specialty.`,
    ],
    servicesList: [
      'Patient Registration & Insurance Eligibility Verification',
      'Claims Preparation, Submission & Tracking',
      'Payment Posting & Reconciliation',
      'Accounts Receivable Management & Follow-up',
      'Revenue Cycle Analytics, Reporting & Optimization',
    ],
  },
  {
    category: 'Claims Accuracy',
    title: 'Clean Claim Submission & Tracking',
    image: '/assets/doctors/service-2.jpg',
    description: [
      `Clean claim submission is vital to accelerate reimbursements and avoid costly denials or delays. Our Claims Accuracy service ensures that every medical claim is meticulously reviewed and scrubbed for errors before submission, adhering to payer-specific guidelines and industry best practices.`,
      
      `Our team utilizes cutting-edge claim scrubbing software and manual expert reviews by certified coders to detect and correct inaccuracies such as coding mismatches, missing documentation, or incorrect patient information. This rigorous process reduces claim rejection rates significantly and speeds up the payment lifecycle.`,
      
      `We also provide continuous tracking of all submitted claims, promptly identifying any issues that arise during processing and swiftly initiating corrective actions or resubmissions. Our comprehensive payer communication helps resolve disputes quickly, thereby enhancing your practice’s financial stability and administrative efficiency.`,
    ],
    servicesList: [
      'Automated and Manual Claims Scrubbing',
      'Real-Time Claim Validation & Error Correction',
      'Denial Prevention and Reduction Strategies',
      'Claims Follow-Up and Resubmission Processes',
      'Effective Payer Communication and Support',
    ],
  },
  {
    category: 'Front-End Services',
    title: 'Patient Eligibility & Insurance Verification',
    image: '/assets/doctors/service-3.jpg',
    description: [
      `Efficient front-end services such as patient eligibility and insurance verification play a critical role in the medical billing workflow, minimizing the risk of denied claims due to ineligible coverage or outdated insurance information.`,
      
      `Our dedicated team conducts thorough insurance eligibility checks prior to the patient's appointment, verifying coverage details, co-pays, deductibles, and benefit limitations. This information empowers healthcare providers to manage patient expectations, prevent billing surprises, and secure upfront payments where necessary.`,
      
      `Furthermore, we handle pre-authorizations and pre-certifications to comply with payer requirements, reducing delays and ensuring all clinical services are approved beforehand. Accurate patient demographic capture and insurance data management streamline administrative workflows and contribute to overall billing accuracy.`,
    ],
    servicesList: [
      'Comprehensive Eligibility & Benefits Verification',
      'Pre-Authorization and Pre-Certification Management',
      'Accurate Patient Demographics and Insurance Data Entry',
      'Insurance Coverage Validation and Updates',
    ],
  },
  {
    category: 'Coding Compliance',
    title: 'Medical Coding & Clinical Documentation Improvement',
    image: '/assets/doctors/service-4.jpg',
    description: [
      `Accurate and compliant medical coding is the foundation of proper reimbursement and regulatory adherence. Our Medical Coding & Clinical Documentation Improvement (CDI) services ensure that all diagnoses, procedures, and services are coded correctly, reflecting the complexity and medical necessity of care provided.`,
      
      `Our certified professional coders stay up to date with the latest ICD-10, CPT, and HCPCS guidelines, applying best practices to maximize legitimate reimbursements while reducing audit risks. We collaborate closely with healthcare providers to review and enhance clinical documentation, supporting thorough and precise coding.`,
      
      `Through targeted CDI initiatives, we help identify documentation gaps, educate providers, and implement corrective measures to improve code specificity and compliance. This improves revenue integrity, accelerates payments, and prepares practices for external audits with confidence.`,
    ],
    servicesList: [
      'Accurate ICD-10, CPT, and HCPCS Coding',
      'Clinical Documentation Review and Improvement Programs',
      'Coding Audits and Compliance Monitoring',
      'Provider Education and Staff Training on Coding Updates',
    ],
  },
  {
    category: 'Reimbursement Recovery',
    title: 'Denial Prevention, Management & Appeals',
    image: '/assets/doctors/service-5.jpg',
    description: [
      `Denied claims represent lost revenue and increased administrative workload. Our Denial Prevention, Management, and Appeals service focuses on identifying, preventing, and resolving claim denials to maximize reimbursement and minimize revenue leakage.`,
      
      `We analyze denial trends to pinpoint root causes, such as coding errors, missing documentation, or payer policy changes. Our team works proactively to correct these issues before claim submission and to educate providers on best practices to reduce future denials.`,
      
      `When denials do occur, we manage the entire appeals process—preparing thorough documentation, submitting appeals within payer timelines, and following up aggressively until resolution. Our proven strategies recover valuable revenue and improve your practice’s overall financial health.`,
    ],
    servicesList: [
      'Detailed Denial Analysis and Reporting',
      'Appeals Preparation, Submission, and Follow-Up',
      'Root Cause Identification and Corrective Actions',
      'Payer Negotiations and Dispute Resolution',
    ],
  },
  {
    category: 'Practice Optimization',
    title: 'Practice Operations & Billing Workflow Support',
    image: '/assets/doctors/service-1.jpg',
    description: [
      `Efficient practice operations and optimized billing workflows are essential to reduce errors, increase productivity, and improve patient satisfaction. Our Practice Optimization services provide customized assessments and solutions tailored to your healthcare setting.`,
      
      `We evaluate your current billing processes, administrative workflows, and technology systems to identify bottlenecks and areas for improvement. Our team designs streamlined workflows that enhance communication between clinical and administrative staff and reduce redundant tasks.`,
      
      `In addition, we offer staff training on best practices and billing software, ensuring your team is well-equipped to manage billing activities effectively. Our patient communication enhancements also improve transparency, helping patients understand their financial responsibilities and reducing delays in payments.`,
    ],
    servicesList: [
      'Comprehensive Workflow Analysis and Redesign',
      'Billing Staff Training and Continuous Support',
      'Practice Management System Integration and Optimization',
      'Enhanced Patient Financial Communication Strategies',
    ],
  },
  {
    category: 'Legal & Data Security',
    title: 'HIPAA Compliance & Regulatory Audits',
    image: '/assets/doctors/service-2.jpg',
    description: [
      `Healthcare providers must maintain strict compliance with HIPAA regulations to protect patient privacy and avoid costly penalties. Our HIPAA Compliance & Regulatory Audit services help practices implement, monitor, and maintain robust data security and privacy protocols.`,
      
      `We conduct thorough risk assessments and audits to identify vulnerabilities in your billing and practice management systems. Based on these findings, we assist in developing comprehensive policies, procedures, and staff training programs to safeguard Protected Health Information (PHI).`,
      
      `Our expertise ensures your practice is prepared for external regulatory audits, minimizing disruption and risk. We also provide ongoing monitoring and breach prevention strategies, keeping your operations compliant with evolving healthcare laws and standards.`,
    ],
    servicesList: [
      'HIPAA Risk Assessments and Compliance Audits',
      'Development and Implementation of Privacy Policies',
      'Staff Training on Regulatory Requirements and Security Best Practices',
      'Data Breach Prevention and Incident Response Planning',
    ],
  },
  {
    category: 'Financial Intelligence',
    title: 'Performance Metrics, Analytics & Reporting',
    image: '/assets/doctors/service-3.jpg',
    description: [
      `Understanding and analyzing financial performance metrics is key to sustaining and growing a healthcare practice. Our Performance Metrics, Analytics, and Reporting service offers comprehensive dashboards and detailed reports to provide actionable insights into your revenue cycle health.`,
      
      `We track critical key performance indicators (KPIs) such as claim denial rates, days in accounts receivable, collection percentages, and patient balances. By presenting this data clearly and in real time, we empower your management team to make informed strategic decisions that optimize revenue and operational efficiency.`,
      
      `Our custom reporting tools can be tailored to meet the unique needs of your practice, allowing you to identify trends, benchmark against industry standards, and continuously improve your billing and collections processes for maximum financial outcomes.`,
    ],
    servicesList: [
      'Revenue Cycle Key Performance Indicators (KPIs) Dashboards',
      'Customizable Financial and Operational Reporting',
      'Denial and Collections Analytics and Trend Analysis',
      'Strategic Consulting for Revenue Cycle Improvement',
    ],
  },
];

export default function Details() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'End-to-End Billing Solutions';

  // Find the service detail matching the category (case insensitive)
  const service = servicesDetails.find(
    (s) => s.category.toLowerCase() === category.toLowerCase()
  ) || servicesDetails[0]; // fallback to first if no match

  return (
    <div className="outpatient-container">
      <ServicesSidebar />
      <div className="content">
        <img src={service.image} alt={service.title} className="top-image" />
        <h2>{service.title}</h2>
        {service.description.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        <div className="services-grid">
          <div className="services-card">
            <h4>{service.category}</h4>
            <ul>
              {service.servicesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
