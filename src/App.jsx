import React from 'react';
import './App.css';
import bgImage from './assets/designer_bg.png';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Clients from './components/Clients';
import Testimonial from './components/Testimonial';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay"></div>

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
            <a href="#home" className="active">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#services">OUR SERVICES</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#pricing">PRICING</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <button className="hire-btn nav-btn">
            <svg className="user-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            HIRE ME
          </button>
        </header>

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
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Resume />
      <Testimonial />
      <Stats />
      <Pricing />
      <Clients />
      <Blog />
    </>
  );
}

export default App;
