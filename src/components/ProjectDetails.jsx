import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetails.css';

import mockupImg from '../assets/project_mockup.webp';
import bannerImg from '../assets/project_banner.webp';

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="project-details-v2 fade-in">
      
      {/* Header / Intro */}
      <header className="pd-header">
        <div className="container pd-header-container">
          <div className="pd-title-area">
            <span className="pd-category">UI/UX Design</span>
            <h1 className="pd-title">PROJECT <br/><span className="highlight-text">NO. {id}</span></h1>
            <p className="pd-brief">
              A minimalist, typography-driven digital experience. Focusing on negative space, 
              crisp contrasts, and seamless interactions to elevate the brand's identity.
            </p>
          </div>
          <div className="pd-meta-area">
            <div className="pd-meta-item">
              <h6>Client</h6>
              <p>Studio Nexus</p>
            </div>
            <div className="pd-meta-item">
              <h6>Year</h6>
              <p>2026</p>
            </div>
            <div className="pd-meta-item">
              <h6>Role</h6>
              <p>Lead Designer</p>
            </div>
            <div className="pd-meta-item">
              <h6>Link</h6>
              <a href="#" className="pd-link">View Live Site →</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Showcase Image */}
      <section className="pd-showcase">
        <div className="container">
          <div className="pd-image-large">
            <img src={bannerImg} alt="Project Banner" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Details Split */}
      <section className="pd-details">
        <div className="container pd-details-container">
          <div className="pd-details-left">
            <h2>The Challenge</h2>
          </div>
          <div className="pd-details-right">
            <p>
              The primary challenge was to strip away all unnecessary elements and focus 
              purely on content delivery. We needed to create a visual language that felt 
              both authoritative and accessible. By utilizing stark contrasts and a highly 
              structured grid system, we were able to guide the user's eye naturally through 
              complex information architectures.
            </p>
            <br/>
            <p>
              Our solution involved a custom design system built from the ground up, ensuring 
              pixel-perfect consistency across all breakpoints and devices.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Gallery */}
      <section className="pd-gallery">
        <div className="container pd-gallery-container">
          <div className="pd-gallery-item">
            <img src={mockupImg} alt="App Mockup" loading="lazy" />
          </div>
          <div className="pd-gallery-text">
            <h3>Refined <br/> Interactions</h3>
            <p>Every animation and transition was crafted to feel deliberate and smooth. The typography was selected to make reading effortless.</p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="pd-footer-nav">
        <div className="container pd-nav-container">
          <Link to="/portfolio" className="pd-nav-link back">
            <span className="arrow">←</span> Back to Work
          </Link>
          <Link to={`/portfolio/${parseInt(id) + 1}`} className="pd-nav-link next">
            Next Project <span className="arrow">→</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetails;
