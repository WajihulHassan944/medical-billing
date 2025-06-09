import React from 'react';
import Image from 'next/image';
import './MedicalBillingHighlight.css';

const MedicalBillingHighlight = ({
  title,
  paragraphs = [],
  buttonText = 'Let’s Connect',
  buttonLink = '#',
 
}) => {
  return (
    <section className="billing-highlight-section">
      <div className="billing-images">
        <div className="main-image">
          <Image src={'/assets/sub-services/24.png'} alt="Billing Main" width={400} height={300} />
        </div>
    
       
      </div>
      <div className="billing-content">
        <h3 className="billing-title-1">{title}</h3>
        {paragraphs.map((para, i) => (
          <p key={i} className="billing-paragraph">{para}</p>
        ))}
        <a href={buttonLink} className="billing-button">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default MedicalBillingHighlight;
