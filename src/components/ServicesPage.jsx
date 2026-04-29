import React from 'react';
import './ServicesPage.css';

const servicesData = [
  {
    id: 1,
    title: 'WEB DESIGN',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3"></circle>
        <line x1="12" y1="22" x2="12" y2="8"></line>
        <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'WEB DEVELOPMENT',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'MARKETING',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'WOO COMMERCE',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'SEO & SMO',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <circle cx="10" cy="13" r="2"></circle>
        <line x1="11.41" y1="14.41" x2="14" y2="17"></line>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'PHOTOGRAPHY',
    description: 'Neque porro quisquam est quisit dolorem ipsum quia dolor sit amet consectetur velit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
      </svg>
    ),
  },
  {
    id: 7,
    title: 'APP DEVELOPMENT',
    description: 'Expert mobile app development for iOS and Android platforms using modern frameworks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    id: 8,
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive and engaging user experiences through research and modern design.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: 9,
    title: 'CONTENT WRITING',
    description: 'Compelling and SEO-friendly content that engages your audience and builds brand authority.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
      </svg>
    ),
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="page-header">
        <div className="container">
          <span className="subtitle">What I can do</span>
          <h1>OUR SERVICES</h1>
          <div className="separator">
            <span className="line"></span>
            <span className="hexagon"></span>
            <span className="line"></span>
          </div>
          <p className="header-text">
            I offer a wide range of creative and technical services to help your business grow. 
            From initial design concepts to final implementation, I ensure high-quality results.
          </p>
        </div>
      </header>

      <main className="services-main-content">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="card-inner">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className="read-more">READ MORE</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="process-section">
        <div className="container">
          <div className="section-title">
            <span className="subtitle">How I work</span>
            <h2>MY WORKING PROCESS</h2>
            <div className="separator">
              <span className="line"></span>
              <span className="hexagon"></span>
              <span className="line"></span>
            </div>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <div className="process-number">01</div>
              <h3>RESEARCH</h3>
              <p>We start by understanding your needs and researching the best solutions.</p>
            </div>
            <div className="process-item">
              <div className="process-number">02</div>
              <h3>DESIGN</h3>
              <p>Creating beautiful and functional designs based on our research.</p>
            </div>
            <div className="process-item">
              <div className="process-number">03</div>
              <h3>DEVELOP</h3>
              <p>Bringing designs to life with clean, efficient, and scalable code.</p>
            </div>
            <div className="process-item">
              <div className="process-number">04</div>
              <h3>LAUNCH</h3>
              <p>Final testing and deployment to ensure a smooth launch.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <p>Get in touch today for a free consultation and quote.</p>
          <button className="contact-btn">GET A QUOTE</button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
