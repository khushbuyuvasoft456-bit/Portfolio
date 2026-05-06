import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './HireMeModal.css';

const HireMeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  if (!isOpen) return null;

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

    // Using existing keys from ContactPage.jsx
    const serviceId = 'service_k8rcx9x';
    const templateId = 'template_hfv1dae';
    const publicKey = 'gm_-aTkpLN0xErJkS';

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        setIsSending(false);
        setStatus({ type: 'success', message: 'Hiring request sent successfully! I will get back to you soon.' });
        setTimeout(() => {
          onClose();
          setStatus({ type: '', message: '' });
          setFormData({ name: '', email: '', projectType: '', message: '' });
        }, 3000);
      }, (error) => {
        setIsSending(false);
        setStatus({ type: 'error', message: 'Failed to send request. Please try again or contact me directly.' });
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>Hire Me</h2>
          <p>Let's build something amazing together.</p>
        </div>

        <form className="hire-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="projectType">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select project type</option>
              <option value="web-design">Web Design</option>
              <option value="development">Web Development</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="mobile-app">Mobile App</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Brief</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="modal-submit-btn" disabled={isSending}>
            {isSending ? 'SENDING...' : 'SEND REQUEST'}
          </button>

          {status.message && (
            <div className={`modal-status ${status.type}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;
