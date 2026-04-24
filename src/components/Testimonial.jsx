import React, { useState } from 'react';
import './Testimonial.css';
import portraitImg from '../assets/testimonial_portrait.png';

const testimonialsData = [
  {
    id: 1,
    name: 'A SHELTON',
    designation: 'CEO, Company name',
    quote: 'Duis ut ullamcorper leo, eget euismod arcu alga este. Lorem ipsum dolor sit amet, consectetur eres tua adipiscing elit. Aenean sed odio sitamet nibh vulputate cursus a sit amet mauris.'
  },
  {
    id: 2,
    name: 'LIA SHELTON',
    designation: 'CEO, Company name',
    quote: 'Duis ut ullamcorper leo, eget euismod arcu alga este. Lorem ipsum dolor sit amet, consectetureres tua adipiscing elit. Ipsutissem nibh id elit. Duis sed odio sitamet nibh vulputate cursus a sit amet mauris.'
  },
  {
    id: 3,
    name: 'JONH DOE',
    designation: 'CEO, Company name',
    quote: 'Duis ut ullamcorper leo, eget euismod arcu alga este. Lorem ipsum dolor sit amet, consectetur eres tua adipiscing elit. Ipsutissem nibh id elit. Duis sed odio sitamet nibh vulputate cursus a sit amet mauris.'
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonial-section" id="testimonial">
      <div className="section-header">
        <span className="subtitle">What my clients say</span>
        <h2>TESTIMONIAL</h2>
        <div className="separator">
          <div className="line"></div>
          <div className="hexagon-sep"></div>
          <div className="line"></div>
        </div>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation.
        </p>
      </div>

      <div className="testimonial-container">
        {/* Slider Track */}
        <div 
          className="testimonial-grid"
          style={{ 
            transform: `translateX(calc(${(1 - currentIndex)} * (var(--card-width, 450px) + 30px)))`,
            transition: 'transform 0.4s ease-out'
          }}
        >
          {testimonialsData.map((item, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={item.id} 
                className={`testimonial-item ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="testimonial-bubble">
                  <div className="avatar-wrapper">
                    <div className="avatar-hexagon-outer">
                      <div className="avatar-hexagon-inner">
                        <img src={portraitImg} alt={item.name} />
                      </div>
                    </div>
                  </div>
                  <p>
                    <span className="quote-icon left">“</span>
                    {item.quote}
                    <span className="quote-icon right">”</span>
                  </p>
                </div>
                <div className="client-info">
                  <h3>{item.name}</h3>
                  <p className="designation"><span className="dash">-</span> {item.designation} <span className="dash">-</span></p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Controls */}
        <div className="carousel-dots">
          <button 
            className="nav-arrow prev" 
            onClick={handlePrev}
            style={{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'default' : 'pointer' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          {testimonialsData.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}

          <button 
            className="nav-arrow next" 
            onClick={handleNext}
            style={{ opacity: currentIndex === testimonialsData.length - 1 ? 0.3 : 1, cursor: currentIndex === testimonialsData.length - 1 ? 'default' : 'pointer' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
