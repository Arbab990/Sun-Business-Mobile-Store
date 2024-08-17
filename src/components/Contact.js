import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      alert(result.message); // Show a success message
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Get in Touch</h3>
      <div className="inputBox">
        <span className="fas fa-user"></span>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      </div>
      <div className="inputBox">
        <span className="fas fa-envelope"></span>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      </div>
      <div className="inputBox">
        <span className="fas fa-phone"></span>
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
      </div>
      <input type="submit" value="Contact Now" className="btn" />
    </form>
  );
};

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>Contact</span> Us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14236.04923767605!2d80.99874599999998!3d26.871350000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2ba7d1e418d%3A0x65a1132e6db6b594!2ssun%20business%20mobile%20center!5e0!3m2!1sen!2sin!4v1723650175974!5m2!1sen!2sin" 
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
