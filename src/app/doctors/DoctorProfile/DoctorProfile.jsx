import React from 'react';
import './DoctorProfile.css';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaGoogle, FaYoutube } from 'react-icons/fa';

const DoctorProfile = () => {
  return (
    <section className="doctor-section">
      <p className="subtitle">Professionals</p>
      <h1 className="title">Chief of Medicine</h1>

      <div className="doctor-card">
        <div className="doctor-img">
          <Image src="/assets/doctors/chief.jpg" alt="Dr. Nick Sims" width={220} height={220} />
        </div>
        <div className="doctor-info">
          <div className="doctor-header">
            <div>
              <h2>Dr. Nick Sims</h2>
              <p className="specialty specialtyOne">Gynecologist</p>
            </div>
            <div className="doctor-contact">
              <p><FaPhoneAlt className="icon" /> +1-212-555-7575</p>
              <p><FaEnvelope className="icon" /> example@example.com</p>
            </div>
          </div>
          <div className='lineInCard'></div>
          <p className="doctor-bio">
            Etiam eu molestie eros, commodo hendrerit sapien. Maecenas tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut, 
            lacinia molestie velit. Maecenas ornare consequat massa ullamcorper dapibus. Etiam eu molestie eros, commodo hendrerit sapien. 
            Maecenas tempus leo ac nisi iaculis porta. Sed sapien tortor, aliquet a velit ut, lacinia molestie velit. Maecenas ornare consequat 
            massa ullamcorper dapibus.
          </p>
          <div className="doctor-socials">
            <FaTwitter />
            <FaFacebookF />
            <FaGoogle />
            <FaYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
