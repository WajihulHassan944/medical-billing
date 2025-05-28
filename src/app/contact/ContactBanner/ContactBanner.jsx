"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./ContactBanner.css";

const ContactBanner = () => {
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [statusMessage, setStatusMessage] = useState(null); // success or error message

  // Example departments and doctors - you can replace with real data
  const departments = ["Cardiology", "Dermatology", "Neurology"];
  const doctors = ["Dr. John Smith", "Dr. Jane Doe", "Dr. Max Turner"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !department ||
      !doctor ||
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !date
    ) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    const payload = {
      department,
      doctor,
      name,
      phone,
      email,
      date,
    };

    try {
      const response = await fetch(
        "https://server-for-sending-emails.vercel.app/api/book-appointment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || "Failed to book appointment.");
      }

      setStatusMessage({
        type: "success",
        text: "Appointment booked successfully!",
      });

      // Clear form
      setDepartment("");
      setDoctor("");
      setName("");
      setPhone("");
      setEmail("");
      setDate("");
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className="contact-banner">
      <div className="contact-left"></div>

      <div className="contact-form-container">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="custom-select-contact">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Departments</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
              <FaChevronDown className="dropdown-icon" />
            </div>

            <div className="custom-select-contact">
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">Select Doctors</option>
                {doctors.map((doc) => (
                  <option key={doc} value={doc}>
                    {doc}
                  </option>
                ))}
              </select>
              <FaChevronDown className="dropdown-icon" />
            </div>
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit" className="appointment-button">
            Make an Appointment
          </button>
        </form>

        {statusMessage && (
          <p
            style={{
              marginTop: "12px",
              color: statusMessage.type === "error" ? "red" : "green",
            }}
          >
            {statusMessage.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactBanner;
