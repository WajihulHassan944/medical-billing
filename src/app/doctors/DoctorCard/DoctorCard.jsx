import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './DoctorCard.css';

const DoctorCard = ({ image, name, specialty, phone, email }) => {
  return (
    <div className="doctor-card-1">
      <div className="doctor-image">
        <Image src={image} alt={name} width={300} height={200} style={{objectFit:"cover", width:"100%", objectPosition:"top"}} />
      </div>
      <div className="doctor-details">
        <h3>{name}</h3>
        <p className="specialty">{specialty}</p>
        <p className="desc">Cum sociis natoque penatibus et magnis dis parturient montesmus.</p>
        <div className="contact-info">
          <p><FaPhoneAlt className="icon" /> {phone}</p>
          <p><FaEnvelope className="icon" /> {email}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
