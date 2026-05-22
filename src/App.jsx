import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Routes, Route, NavLink, Link as RouterLink } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import './App.css';
import { useTheme } from './context/ThemeContext';
import bgImage from './assets/designer_bg.png';
import About from './components/About';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import ProjectDetails from './components/ProjectDetails';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import PricingPage from './components/PricingPage';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import HireMeModal from './components/HireMeModal';

const Navbar = ({ onHireMeClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="logo-text">
          <span className="first-name">KHUSHBU</span>
          <span className="last-name">GURJAR</span>
        </div>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <HashLink smooth to="/#home" activeClassName="active" onClick={closeMobileMenu}>HOME</HashLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>ABOUT US</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>OUR SERVICES</NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>PORTFOLIO</NavLink>
        <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>PRICING</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>BLOG</NavLink>
        <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>FAQ</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMobileMenu}>CONTACT</NavLink>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          )}
        </button>
        <button className="hire-btn nav-btn" onClick={onHireMeClick}>
          <svg className="user-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          HIRE ME
        </button>
      </div>
    </header>
  );
};

const Home = ({ onHireMeClick }) => (
  <>
    <div className="hero-container" id="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>
      <main className="hero-content">
        <div className="text-section">
          <h1>I am <br /> <span className="highlight">Designer</span></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur Iscing elit. Cras lacinia
            magna vel molestie faucibus
          </p>
          <button className="hire-btn main-btn" onClick={onHireMeClick}>HIRE ME</button>
        </div>
      </main>

      <div className="hero-footer">
        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="scroll-down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="7" y="3" width="10" height="18" rx="5" ry="5" strokeWidth="1.5"></rect>
            <circle cx="12" cy="8" r="1" strokeWidth="2"></circle>
          </svg>
          <span>SCROLL DOWN</span>
        </div>

        <div className="spacer"></div>
      </div>
    </div>
    <Services />
    <Portfolio />
    <Skills />
    <Resume />
    <Testimonial />
    <Stats />
    <Pricing />
    <Clients />

    <FAQ />
    <Contact />
  </>
);



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Navbar onHireMeClick={toggleModal} />
      <Routes>
        <Route path="/" element={<Home onHireMeClick={toggleModal} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <HireMeModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
}

export default App;




