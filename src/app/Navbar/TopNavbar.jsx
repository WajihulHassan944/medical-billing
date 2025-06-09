'use client';
import React, { useState, useEffect } from 'react';
import './navbar.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronDown,
  FaLinkedin,
} from 'react-icons/fa';

import Link from 'next/link';

const TopHeader = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Optional: dummy closeMenu if needed for now
  const closeMenu = () => setShowDetails(false);

  return (
    <div className="top-header">
      {isMobile && (
        <div className="toggle-btn" onClick={toggleDetails}>
          <FaChevronDown />
        </div>
      )}

      <div className={`left ${isMobile && !showDetails ? 'hidden' : ''}`}>
        <Link href="/#appointment" className="navLinkMain" onClick={closeMenu}>
          Faqs
        </Link>
        <Link href="/contact" className="navLinkMain" onClick={closeMenu}>
          Book an Appointment
        </Link>
        <Link href="/contact" className="navLinkMain" onClick={closeMenu}>
          Contact
        </Link>
        <span className="email">example@example.com</span>
      </div>

      <div className={`right ${isMobile && !showDetails ? 'hidden' : ''}`}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
         <a href="#"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default TopHeader;
