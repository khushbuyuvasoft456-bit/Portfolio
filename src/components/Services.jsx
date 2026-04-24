import React from 'react';
import './Services.css';

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
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <span className="subtitle">What I can do</span>
        <h2>SERVICES</h2>
        <div className="separator">
           <span className="line"></span>
           <span className="hexagon"></span>
           <span className="line"></span>
        </div>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t empor 
          incididunt ut labore et dolore magna aliqua. quis nostrud exercitation.
        </p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {servicesData.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
