import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <span className="subtitle">Who am i</span>
        <h2>ABOUT ME</h2>
        <div className="separator">
          <span className="line"></span>
          <span className="hexagon"></span>
          <span className="line"></span>
        </div>
        <p className="intro-text">
          Hello, I'm a UI/UX Designer & Frontend Developer from Amsterdam, Netherlands. I hold a master
          degree of Web Design from the World University.
        </p>
      </div>

      <div className="about-content">
        <div className="img-column">
          <div className="hex-border">
            <svg viewBox="0 0 100 115" width="100%" height="100%">
              <polygon points="50 3, 97 28, 97 83, 50 110, 3 83, 3 28" fill="none" stroke="var(--yellow-accent, #FFC815)" strokeWidth="3" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="text-column">
          <h3>PROFESSIONAL PROFILE</h3>
          <p>I have been crafting beautiful websites, launching stunning brands and making clients happy for years.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.</p>
          <p>Praesent sit amet massa suscipit, auctor sapien non, egestas felis. Maecenas mattis aliquet est vitae dignissim. Suspendisse aliquam lacus mauris, id placerat felis faucibus quis. Suspendisse potenti. Etiam mattis, eros id porta iaculis, nisl purus dapibus leo, a lacinia tellus nunc sed nunc. faucibus quis. Suspendisse id porta iaculis.</p>
        </div>

        <div className="info-column">
          <ul className="info-list">
            <li><span className="label">Name:</span> <span>Khushbu Gurjar</span></li>
            <li><span className="label">Date of birth:</span> <span>27 september 1996</span></li>
            <li><span className="label">Email:</span> <span>Khushbuyuvasoft456@gmail.com</span></li>
            <li><span className="label">Phone:</span> <span>+91 9617726823</span></li>
            <li><span className="label">Nationality:</span> <span>Indian</span></li>
            <li><span className="label">Address:</span> <span>Nemawar Road Dudhiya Indore</span></li>
          </ul>

          <div className="action-buttons">
            <button className="btn outline-btn">
              <span className="icon-circle yellow-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </span>
              DOWNLOAD CV
            </button>
            <button className="btn solid-btn">
              <span className="icon-circle white-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
