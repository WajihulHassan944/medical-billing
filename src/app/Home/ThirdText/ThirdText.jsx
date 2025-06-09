import React from 'react';
import Image from 'next/image';
import "./ThirdText.css";

const ThirdText = () => {
  return (
    <div className="thirdtext-container">
      <div className="thirdtext-left">
        <h2 className="thirdtext-heading">
          End-to-End Medical Billing Solutions for Healthcare Physicians
        </h2>
        <p className="thirdtext-paragraph">
          Our advanced Infrastructure and Strategies are designed to determine Issues in your
          <span className="thirdtext-highlight"> Revenue Cycle Management </span>
          and improve the Medical Billing Cycle with precisely streamlined processes. We believe that healthcare
          providers face a variety of challenges, including missed charges, underpricing, non-reimbursed errors,
          coding errors, and more, all of which can result in significant annual revenue losses.
        </p>
        <p className="thirdtext-paragraph">
          Hence, Our <span className="thirdtext-highlight">Medical Billing Services</span> and
          <span className="thirdtext-highlight"> Physician Credentialing</span> have been carefully developed to
          proactively rectify these discrepancies by ensuring precision in outcomes, this strategic approach not
          only boosts their financial performance but also improves their online visibility and ranking within the
          highly competitive Medical Billing and Coding Healthcare Industry.
        </p>
      </div>

      <div className="thirdtext-right">
        <Image
          src="/assets/home/7-1.png"
          alt="Billing Performance Dashboard"
          width={300}
          height={150}
          className="thirdtext-image"
        />
      </div>
    </div>
  );
};

export default ThirdText;
