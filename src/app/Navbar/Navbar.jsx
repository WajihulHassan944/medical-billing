'use client';

import React, { useState, useRef, useEffect } from 'react';
import './mainnavbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MainNavbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const navRef = useRef();

  const closeMenu = () => {
    setMenuOpen(false);
    setLearnOpen(false);
    setSolutionsOpen(false);
    setCompanyOpen(false);
  };

  const toggleDropdown = (type, e) => {
    e.preventDefault();

    if (type === 'learn') {
      setLearnOpen(prev => !prev);
      setSolutionsOpen(false);
      setCompanyOpen(false);
    } else if (type === 'solutions') {
      setSolutionsOpen(prev => !prev);
      setLearnOpen(false);
      setCompanyOpen(false);
    } else if (type === 'company') {
      setCompanyOpen(prev => !prev);
      setLearnOpen(false);
      setSolutionsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`main-navbar ${scrolled ? 'scrolled-bg' : ''}`} ref={navRef}>
      <Link href="/">
        <div className="logo">
          <span className="icon">
            <Image src="/assets/logoone.png" width={30} height={30} alt="Logo" />
          </span>
          <span className="brand"><strong>Care</strong>Watch</span>
        </div>
      </Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`flexed-div ${menuOpen ? 'active' : ''}`}>
        <div className="nav-links">
          {/* SOLUTIONS */}
          <div className="dropdown-wrapper">
            <a href="#" className="navLinkMain" onClick={(e) => toggleDropdown('solutions', e)}>
              SOLUTIONS <RiArrowDropDownLine className={`dropdown-arrow ${solutionsOpen ? 'rotated' : ''}`}size={24} />
            </a>
            {solutionsOpen && (
              <div className="dropdownMenu">
                <Link href="/services" className="dropdownItem" onClick={closeMenu}>Medical Billing & Coding Services</Link>
                <Link href="/service-2" className="dropdownItem" onClick={closeMenu}>Physicians Credentialing Services</Link>
                <Link href="/service-3" className="dropdownItem" onClick={closeMenu}>Revenue Cycle Management</Link>
                <Link href="/service-4" className="dropdownItem" onClick={closeMenu}>AR & Denial Management Services</Link>
                <Link href="/service-5" className="dropdownItem" onClick={closeMenu}>Medical Billing & Coding Audit</Link>
                <Link href="/service-6" className="dropdownItem" onClick={closeMenu}>Verification & Prior Authentication</Link>
                <Link href="/service-7" className="dropdownItem" onClick={closeMenu}>Contact Center & Patient Scheduling</Link>
              </div>
            )}
          </div>

          <Link href="/ServicesPage" className="navLinkMain" onClick={closeMenu}>SPECIALTIES</Link>

          {/* COMPANY */}
          <div className="dropdown-wrapper">
            <a href="#" className="navLinkMain" onClick={(e) => toggleDropdown('company', e)}>
              COMPANY <RiArrowDropDownLine
  className={`dropdown-arrow ${companyOpen ? 'rotated' : ''}`}
  size={24}
/>

            </a>
            {companyOpen && (
              <div className="dropdownMenu">
                <Link href="/about" className="dropdownItem" onClick={closeMenu}>About</Link>
                 <Link href="/doctors" className="dropdownItem" onClick={closeMenu}>Doctors</Link>
                <Link href="/why-carewatch" className="dropdownItem" onClick={closeMenu}>Why Care Watch</Link>
              </div>
            )}
          </div>

          {/* LEARN */}
          <div className="dropdown-wrapper">
            <a href="#" className="navLinkMain" onClick={(e) => toggleDropdown('learn', e)}>
              LEARN <RiArrowDropDownLine className={`dropdown-arrow ${learnOpen ? 'rotated' : ''}`} size={24}/>
            </a>
            {learnOpen && (
              <div className="dropdownMenu">
                <Link href="/contact#faq" className="dropdownItem" onClick={closeMenu}>FAQs</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
