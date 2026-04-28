import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
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
              <form className="contact-page-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="6" required></textarea>
                </div>
                <button type="submit" className="send-message-btn">SEND MESSAGE</button>
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
