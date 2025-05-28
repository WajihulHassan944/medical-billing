import React from 'react';
import DoctorCard from './DoctorCard';

const doctors = [
  {
    image: '/assets/doctors/doctor-1.jpg',
    name: 'Dr. Michael Linden',
    specialty: 'Throat Specialist',
    phone: '+1-212-333-7078',
    email: 'example@example.com',
  },
  {
    image: '/assets/doctors/doctor-1.jpg',
    name: 'Dr. Max Turner',
    specialty: 'Cardiologist',
    phone: '+1-212-533-5454',
    email: 'example@example.com',
  },
  {
    image: '/assets/doctors/doctor-1.jpg',
    name: 'Dr. Amy Adams',
    specialty: 'Rehabilitation Therapy',
    phone: '+1-212-333-7078',
    email: 'example@example.com',
  },
  {
    image: '/assets/doctors/doctor-1.jpg',
    name: 'Dr. Julia Jameson',
    specialty: 'Pediatrician',
    phone: '+1-212-555-7575',
    email: 'example@example.com',
  }
];

const DoctorList = () => {
  return (
    <section className="doctors-section">
      <p className="subtitle">Professionals</p>
      <h1 className="title">Our Doctors</h1>
      <div className="doctor-grid">
        {doctors.map((doc, idx) => (
          <DoctorCard key={idx} {...doc} />
        ))}
      </div>
    </section>
  );
};

export default DoctorList;
