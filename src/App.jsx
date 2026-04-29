import React from 'react';
import { Link } from 'react-scroll';
import { Routes, Route, NavLink, Link as RouterLink } from 'react-router-dom';
import { NavHashLink as HashLink } from 'react-router-hash-link';
import './App.css';
import bgImage from './assets/designer_bg.png';
import About from './components/About';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
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

const Navbar = () => (
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

    <nav className="nav-links">
      <HashLink smooth to="/#home" activeClassName="active">HOME</HashLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>ABOUT US</NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>OUR SERVICES</NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>PORTFOLIO</NavLink>
      <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>PRICING</NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>BLOG</NavLink>
      <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>FAQ</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>CONTACT</NavLink>
    </nav>

    <button className="hire-btn nav-btn">
      <svg className="user-icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      HIRE ME
    </button>
  </header>
);

const Home = () => (
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
          <button className="hire-btn main-btn">HIRE ME</button>
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
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;




