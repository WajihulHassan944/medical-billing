'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import "./AppointmentFAQ.css";

const AppointmentForm = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    name: '',
    phone: '',
    email: '',
    date: '',
  });
  const [statusMessage, setStatusMessage] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.department || !formData.doctor || !formData.name ||
      !formData.phone || !formData.email || !formData.date
    ) {
      setStatusMessage({ type: 'error', text: 'Please fill out all fields.' });
      return;
    }

    try {
      const response = await fetch('https://server-for-sending-emails.vercel.app/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      setStatusMessage({ type: 'success', text: 'Appointment booked successfully!' });
      // Reset form
      setFormData({
        department: '',
        doctor: '',
        name: '',
        phone: '',
        email: '',
        date: '',
      });
    } catch (error) {
      setStatusMessage({ type: 'error', text: error.message || 'Something went wrong.' });
    }
  };

  const faqs = [
    {
      question: "What are your regular office hours?",
      answer: "Our office hours are Monday to Friday from 8:00 AM to 6:00 PM EST. For urgent billing inquiries, support is available 24/7."
    },
    {
      question: "What is your appointment policy?",
      answer: "You can book appointments online or by calling us. We recommend booking in advance for personalized support sessions."
    },
    {
      question: "What should I do if I’m ill?",
      answer: "Reach out to your healthcare provider. For insurance or billing concerns related to your treatment, CareWatch is ready to assist."
    },
    {
      question: "How do I get a refill on my prescription?",
      answer: "Request a refill via your healthcare provider. For billing-related questions, our consultants are here to help."
    },
  ];

  return (
    <div className="appointment-container">
      <div className="form-section">
        <h2 className='Heading-title'>Book an Appointment</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="row">
            <div className="custom-select-wrapper">
              <select
                className="custom-select"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Departments</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Rehabilitation">Rehabilitation</option>
                <option value="Surgery">Outpatient Surgery</option>
                {/* Add more departments as needed */}
              </select>
              <FaChevronDown className="select-icon" />
            </div>

            <div className="custom-select-wrapper">
              <select
                className="custom-select"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Doctors</option>
                <option value="Dr. John Smith">Dr. John Smith</option>
                <option value="Dr. Nick Sims">Dr. Nick Sims</option>
                <option value="Dr. Michael Linden">Dr. Michael Linden</option>
                <option value="Dr. Max Turner">Dr. Max Turner</option>
                <option value="Dr. Amy Adams">Dr. Amy Adams</option>
                <option value="Dr. Julia Jameson">Dr. Julia Jameson</option>
              </select>
              <FaChevronDown className="select-icon" />
            </div>
          </div>

          <div className="row">
            <input
              className="input1"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="input1"
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <input
              className="input1"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="input1"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button">Make an Appointment</button>

          {statusMessage && (
            <p
              className={`status-message ${
                statusMessage.type === 'error' ? 'error' : 'success'
              }`}
              style={{ marginTop: '10px' }}
            >
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>

      <div className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <h3 className='faq-title-1'>Have some Questions?</h3>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
            style={{ cursor: 'pointer' }}
          >
            {faq.question} <span>{activeIndex === index ? '-' : '+'}</span>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentForm;
