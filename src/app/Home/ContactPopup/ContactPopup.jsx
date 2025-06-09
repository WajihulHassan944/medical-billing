"use client";
import React, { useState } from "react";
import "./HelpPopup.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const HelpPopup = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    department: "",
    doctor: "",
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.department ||
      !formData.doctor ||
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.date
    ) {
      setStatusMessage({ type: "error", text: "Please fill out all fields." });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://server-for-sending-emails.vercel.app/api/book-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      setStatusMessage({
        type: "success",
        text: "Appointment booked successfully!",
      });

      // Reset form
      setFormData({
        department: "",
        doctor: "",
        name: "",
        phone: "",
        email: "",
        date: "",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "Something went wrong.",
      });
    } finally {
    setIsSubmitting(false); // Stop spinner
  }
  };

  return (
    <div className="help-popup-overlay">
      <div className="help-popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>We're here to help</h2>
        <p>We're available 24/7 - Schedule a call with one of our experts now.</p>

        <form className="help-form" onSubmit={handleSubmit}>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Oncology">Oncology</option>
          </select>

          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Doctor
            </option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
            <option value="Dr. Patel">Dr. Patel</option>
          </select>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {statusMessage && (
            <p
              style={{
                color: statusMessage.type === "error" ? "red" : "green",
                marginTop: "10px",
              }}
            >
              {statusMessage.text}
            </p>
          )}
<button type="submit" className="submit-btn" disabled={isSubmitting}>
  {isSubmitting ? (
    <div className="spinner"></div>
  ) : (
    "Submit"
  )}
</button>

        </form>
      </div>
    </div>
  );
};

export default HelpPopup;
