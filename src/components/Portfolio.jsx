import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import imgClock from '../assets/portfolio_clock.png';
import imgDecanter from '../assets/portfolio_decanter.png';
import imgHeadphones from '../assets/portfolio_headphones.png';

const allPortfolioItems = Array.from({ length: 24 }).map((_, index) => {
  let img = imgClock;
  let alt = "Minimalist desk clock";
  if (index % 3 === 1) {
    img = imgDecanter;
    alt = "Fancy glass decanter";
  } else if (index % 3 === 2) {
    img = imgHeadphones;
    alt = "Modern headphones";
  }
  return { id: index, img, alt };
});

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const categories = ['ALL', 'WORDPRESS', 'HTML & CSS', 'JAVASCRIPT', 'MAGENTO', 'PHP & MYSQL', 'PHOTOSHOP'];
  
  const totalPages = 8;
  const currentItems = allPortfolioItems.slice(currentPage * 3, currentPage * 3 + 3);

  const nextSlide = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevSlide = () => setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1));

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header">
        <span className="subtitle">What I did</span>
        <h2>PORTFOLIO</h2>
        <div className="separator">
           <span className="line"></span>
           <span className="hexagon"></span>
           <span className="line"></span>
        </div>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t empor incididunt ut <br />
          labore et dolore magna aliqua. quis nostrud exercitation.
        </p>
      </div>

      <div className="portfolio-filter-container">
        <ul className="portfolio-filter">
          {categories.map((cat, index) => (
            <li key={cat} className={index === 0 ? 'active' : ''}>
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="portfolio-gallery">
        {currentItems.map((item) => (
          <div className="gallery-item fade-in" key={item.id}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className="portfolio-pagination">
        <button className="page-arrow" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="page-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            >
              {currentPage === index && <span className="inner-dot"></span>}
            </span>
          ))}
        </div>
        <button className="page-arrow" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="portfolio-footer" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <Link to="/portfolio" className="view-all-btn">VIEW ALL PROJECTS</Link>
      </div>
    </section>
  );
};

export default Portfolio;

