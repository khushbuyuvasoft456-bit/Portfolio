import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // NOTE: You need to replace these with your actual EmailJS IDs
    const serviceId = 'service_k8rcx9x'; // Replace with your Service ID
    const templateId = 'template_hfv1dae'; // Replace with your Template ID
    const publicKey = 'gm_-aTkpLN0xErJkS'; // Replace with your Public Key

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        setIsSending(false);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        setIsSending(false);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="contact-page">
      <header className="page-header contact-header">
        <div className="container">
          <span className="subtitle">Get In Touch</span>
          <h1>CONTACT ME</h1>
          <div className="separator">
            <span className="line"></span>
            <span className="hexagon"></span>
            <span className="line"></span>
          </div>
          <p className="header-text">
            Have a project in mind or just want to say hi? I'd love to hear from you.
            Fill out the form below or use any of the contact methods to get in touch.
          </p>
        </div>
      </header>

      <main className="contact-main-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Let's Talk</h3>
                  <p>+91 9617726823</p>
                  <p>+91 1234567890</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email Me</h3>
                  <p>Khushbuyuvasoft456@gmail.com</p>
                  <p>hire.khushbu@domain.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Location</h3>
                  <p>Nemawar Road Dudhiya Indore,</p>
                  <p>Madhya Pradesh, India.</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Me</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">FB</a>
                  <a href="#" className="social-icon">TW</a>
                  <a href="#" className="social-icon">LN</a>
                  <a href="#" className="social-icon">BE</a>
                  <a href="#" className="social-icon">DR</a>
                </div>
              </div>
            </div>

            <div className="contact-form-section">
              <form className="contact-page-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="send-message-btn" disabled={isSending}>
                  {isSending ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <section className="map-section">
        <div className="map-container">
          {/* Placeholder for map */}
          <div className="styled-map">
            <div className="map-overlay-card">
              <h4>WORKING HOURS</h4>
              <p>Monday - Friday: 09:00 - 18:00</p>
              <p>Saturday: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
