import React from 'react';
import './Resume.css';

const workData = [
  {
    id: 1,
    company: 'envato',
    role: 'ART DIRECTOR',
    year: '2010 - 2012',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  },
  {
    id: 2,
    company: 'envato',
    role: 'ART DIRECTOR',
    year: '2010 - 2012',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  },
  {
    id: 3,
    company: 'envato',
    role: 'ART DIRECTOR',
    year: '2010 - 2012',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  }
];

const educationData = [
  {
    id: 1,
    school: 'University of Design',
    degree: 'DEGREE OF DESIGN',
    year: '2014 - 2016',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  },
  {
    id: 2,
    school: 'University of Design',
    degree: 'DEGREE OF DESIGN',
    year: '2014 - 2016',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  },
  {
    id: 3,
    school: 'University of Design',
    degree: 'DEGREE OF DESIGN',
    year: '2014 - 2016',
    description: 'Phasellus nec gravida purus. Aliquam ac enim vel ipsum consectetur vulputate. Duis quis feugiat neque. Pellentesque eleifend, nisi vel mattis vestibulum, est lacus pretium quam.'
  }
];

// Reusable SVG Components
const EnvatoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.4 10.3c-.6-.7-1.4-1.2-2.3-1.6-.9-.3-1.8-.5-2.8-.5-1.9 0-3.6.7-5 2-.8.8-1.5 1.7-1.9 2.8-.2.5-.3 1.1-.3 1.7 0 .5.1 1 .3 1.5.1.2.3.4.5.5.3.2.7.2 1.1.1.4-.2.6-.5.7-.9.1-.3.2-.7.2-1.1 0-1 .4-1.9 1-2.6.7-.8 1.6-1.3 2.6-1.5.5-.1 1-.1 1.5 0 .5.1 1 .3 1.4.6.2.1.4.3.5.5.2.2.3.5.3.7 0 .3-.1.6-.2.9-.3.6-.7 1.2-1.2 1.6-.8.7-1.8 1-2.9 1-1.3 0-2.5-.5-3.4-1.3-.6-.5-1.1-1.1-1.5-1.8-.3-.5-.7-.8-1.1-1-.4-.2-.8-.2-1.2-.1-.4.1-.7.4-.9.8-.3.7-.5 1.4-.5 2.1 0 1.1.3 2.1.8 3 1.1 1.9 3 3.1 5.2 3.5 1 .2 2 a0 3.2-.2 1.1-.2 2.1-.6 3.1-1.1 2.2-1.2 4.1-3 4.9-5.3.3-.9.5-1.9.4-2.9z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4zm0 2.2L19 7.4v4.6c0 4.41-2.81 8.52-7 9.8-4.19-1.28-7-5.39-7-9.8V7.4l7-3.2zm-1 2.8v8l6-4-6-4z" />
  </svg>
);

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      
      {/* WORK EXPERIENCE COLUMN */}
      <div className="resume-column work-section">
        <div className="resume-header">
          <h2>WORK EXPERIENCE</h2>
          <div className="header-line light-line"></div>
          <p className="resume-intro-color">
            Lorem ipsum dolor sit amet, consecttetur adipisicing elit, sed do eiusmod t empor 
            incididunt ut labore et dolore magna aliqua. quis nostrud exercitat ion.
          </p>
        </div>
        
        <div className="resume-list">
          {workData.map((item) => (
            <div className="resume-card dark-card" key={item.id}>
              <div className="card-icon-container">
                <div className="yellow-circle-icon">
                  <EnvatoIcon />
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="meta-company">{item.company}</span>
                  <span className="meta-role yellow-text">{item.role}</span>
                  <span className="meta-year">{item.year}</span>
                </div>
                <p className="card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION COLUMN */}
      <div className="resume-column education-section">
        <div className="resume-header">
          <h2>EDUCATION</h2>
          <div className="header-line dark-line"></div>
          <p className="resume-intro">
            Lorem ipsum dolor sit amet, consecttetur adipisicing elit, sed do eiusmod t empor 
            incididunt ut labore et dolore magna aliqua. quis nostrud exercitat ion.
          </p>
        </div>

        <div className="resume-list">
          {educationData.map((item) => (
            <div className="resume-card light-card" key={item.id}>
              <div className="card-icon-container">
                <div className="gray-shield-icon">
                  <ShieldIcon />
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="meta-school">{item.school}</span>
                  <span className="meta-degree dark-text">{item.degree}</span>
                  <span className="meta-year">{item.year}</span>
                </div>
                <p className="card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Resume;
