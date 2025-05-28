"use client";

import React, { useState } from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(null); // {type: 'success'|'error', text: string}

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    try {
      const response = await fetch(
        "https://server-for-sending-emails.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, message }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Failed to send message");
      }

      setStatusMessage({ type: "success", text: "Message sent successfully!" });
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-column-one">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-icon" /> 227 Marion street New
              York USA
            </li>
            <li>
              <FaGlobe className="footer-icon" /> medical-clinic.cmsmasters.net
            </li>
            <li>
              <FaEnvelope className="footer-icon" /> medical-clinic@mail.com
            </li>
            <li>
              <FaPhone className="footer-icon" /> 1-888-333-444-222
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Doctors</h3>
          <ul>
            <li>Dr. Nick Sims</li>
            <li>Dr. Michael Linden</li>
            <li>Dr. Max Turner</li>
            <li>Dr. Amy Adams</li>
            <li>Dr. Julia Jameson</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Outpatient Surgery</li>
            <li>Cardiac Clinic</li>
            <li>Ophthalmology Clinic</li>
            <li>Gynaecological Clinic</li>
            <li>Outpatient Rehabilitation</li>
          </ul>
        </div>

        <div className="footer-column contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          {statusMessage && (
            <p
              style={{
                marginTop: "8px",
                color: statusMessage.type === "error" ? "red" : "green",
              }}
            >
              {statusMessage.text}
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>CareWatch - © 2025 / All Rights Reserved</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <span>|</span>
          <a href="/contact">Contact us</a>
        </div>
        <div className="scroll-top">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
