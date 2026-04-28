import React, { useState } from 'react';
import './PortfolioPage.css';

import imgClock from '../assets/portfolio_clock.png';
import imgDecanter from '../assets/portfolio_decanter.png';
import imgHeadphones from '../assets/portfolio_headphones.png';

const portfolioItems = [
  { id: 1, category: 'WORDPRESS', img: imgClock, title: 'Clock App Design', description: 'A minimalist clock application with smart features.' },
  { id: 2, category: 'HTML & CSS', img: imgDecanter, title: 'Decanter Brand', description: 'Branding and landing page for a luxury decanter.' },
  { id: 3, category: 'JAVASCRIPT', img: imgHeadphones, title: 'Audio System', description: 'Interactive dashboard for a high-end audio system.' },
  { id: 4, category: 'MAGENTO', img: imgClock, title: 'E-commerce Shop', description: 'A robust e-commerce solution for retail.' },
  { id: 5, category: 'PHP & MYSQL', img: imgDecanter, title: 'Data Analytics', description: 'Complex data visualization and management system.' },
  { id: 6, category: 'PHOTOSHOP', img: imgHeadphones, title: 'Social Media Kit', description: 'Creative assets for social media marketing.' },
  { id: 7, category: 'WORDPRESS', img: imgClock, title: 'Portfolio Site', description: 'A personal portfolio for a professional artist.' },
  { id: 8, category: 'HTML & CSS', img: imgDecanter, title: 'Real Estate Portal', description: 'Property listing and search platform.' },
  { id: 9, category: 'JAVASCRIPT', img: imgHeadphones, title: 'Game Interface', description: 'UI/UX design for a mobile gaming app.' },
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'WORDPRESS', 'HTML & CSS', 'JAVASCRIPT', 'MAGENTO', 'PHP & MYSQL', 'PHOTOSHOP'];

  const filteredItems = filter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-page">
      <header className="page-header">
        <div className="container">
          <span className="subtitle">My Works</span>
          <h1>PORTFOLIO</h1>
          <div className="separator">
            <span className="line"></span>
            <span className="hexagon"></span>
            <span className="line"></span>
          </div>
          <p className="header-text">
            Explore my latest projects and creative works. Each project is crafted with precision 
            and a focus on user experience, combining modern design with functional excellence.
          </p>
        </div>
      </header>

      <div className="filter-section">
        <div className="container">
          <ul className="filter-list">
            {categories.map(cat => (
              <li 
                key={cat} 
                className={filter === cat ? 'active' : ''} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div className="portfolio-card" key={item.id}>
                <div className="card-image">
                  <img src={item.img} alt={item.title} />
                  <div className="card-overlay">
                    <div className="overlay-content">
                      <span className="item-category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <button className="view-details-btn">VIEW DETAILS</button>
                    </div>
                  </div>
                </div>
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <section className="cta-section">
        <div className="container">
          <h2>Have a project in mind?</h2>
          <p>Let's work together to create something amazing.</p>
          <button className="contact-btn">HIRE ME NOW</button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
