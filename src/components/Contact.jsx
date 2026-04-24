import React from 'react';
import './Contact.css';

const Contact = () => {
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
                <p>Phone: 1-806-222-000</p>
                <p>Fax: 1-806-222-000</p>
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
                <p>no-reply@domain.com</p>
                <p>hire@domain.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="input-field">
                <span className="input-icon">👤</span>
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <span className="input-icon">📱</span>
                <input type="text" placeholder="Phone" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-field">
                <span className="input-icon">✉️</span>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field select-field">
                <span className="input-icon">☰</span>
                <select defaultValue="">
                  <option value="" disabled>What are you interested i...</option>
                  <option value="web">Web Design</option>
                  <option value="dev">Web Development</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="input-field textarea-field">
              <span className="input-icon">📝</span>
              <textarea placeholder="Describe your project"></textarea>
            </div>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>

        {/* Right Side: Map */}
        <div className="contact-right">
          <div className="map-overlay">
             <div className="location-pin-container">
                <div className="map-card">
                   <h4>DAVID SMITH</h4>
                   <p>PO Box 16122 Collins West,<br/> Amsterdam, Netherlands.</p>
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
