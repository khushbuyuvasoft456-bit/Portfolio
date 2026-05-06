import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    // Using existing keys from ContactPage.jsx
    const serviceId = 'service_k8rcx9x';
    const templateId = 'template_hfv1dae';
    const publicKey = 'gm_-aTkpLN0xErJkS';

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        setIsSending(false);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        e.target.reset();
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
      }, (error) => {
        setIsSending(false);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side: Form and Info */}
        <div className="contact-left">
          <div className="contact-info-grid">
            <div className="info-box">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="info-text">
                <h3>Let's Talk</h3>
                <p>Phone: +91 9617726823</p>
                <p>Fax: +91 1234567890</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p>Khushbuyuvasoft456@gmail.com</p>
                <p>hire.khushbu@domain.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-field">
                <span className="input-icon">👤</span>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="input-field">
                <span className="input-icon">📱</span>
                <input type="text" name="phone" placeholder="Phone" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-field">
                <span className="input-icon">✉️</span>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-field select-field">
                <span className="input-icon">☰</span>
                <select name="interest" defaultValue="">
                  <option value="" disabled>What are you interested in?</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-dev">Web Development</option>
                  <option value="app-dev">App Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="input-field textarea-field">
              <span className="input-icon">📝</span>
              <textarea name="message" placeholder="Describe your project" required></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isSending}>
              {isSending ? 'SENDING...' : 'SUBMIT'}
            </button>

            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Right Side: Map */}
        <div className="contact-right">
          <div className="map-overlay">
            <div className="location-pin-container">
              <div className="map-card">
                <h4>KHUSHBU GURJAR</h4>
                <p>Nemawar Road Dudhiya Indore,<br /> Madhya Pradesh, India.</p>
              </div>
              <div className="pin-wrapper">
                <div className="pin-head">
                  <div className="pin-dot"></div>
                </div>
                <div className="pin-pulse"></div>
              </div>
            </div>
          </div>
          {/* Placeholder for real map */}
          <div className="map-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
