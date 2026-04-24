import React, { useRef } from 'react';
import './Clients.css';

const logos = [
  {
    id: 1,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <path d="M20,25 Q10,10 20,5 Q30,10 20,25" fill="none" stroke="#ccc" strokeWidth="1"/>
        <path d="M80,25 Q90,10 80,5 Q70,10 80,25" fill="none" stroke="#ccc" strokeWidth="1"/>
        <text x="50" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#888">UNIQUE</text>
        <text x="50" y="42" textAnchor="middle" fontSize="6" fill="#aaa">DIGITAL GRAPHICS</text>
        <polygon points="50,10 52,14 56,14 53,17 54,21 50,19 46,21 47,17 44,14 48,14" fill="#ccc"/>
      </svg>
    )
  },
  {
    id: 2,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <path d="M20,15 Q50,5 80,15" fill="none" stroke="#ccc" strokeWidth="2"/>
        <text x="50" y="32" textAnchor="middle" fontSize="18" fontFamily="cursive" fontStyle="italic" fontWeight="bold" fill="#888">Graphic</text>
        <text x="50" y="45" textAnchor="middle" fontSize="6" fill="#aaa">CREATIVE STUDIO</text>
        <path d="M30,40 L70,40" stroke="#ccc" strokeWidth="1"/>
      </svg>
    )
  },
  {
    id: 3,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <polygon points="50,5 80,15 80,35 50,48 20,35 20,15" fill="none" stroke="#ccc" strokeWidth="2"/>
        <path d="M35,25 L65,25 M50,10 L50,40" stroke="#ccc" strokeWidth="2"/>
        <text x="50" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#888">UNIQUE</text>
      </svg>
    )
  },
  {
    id: 4,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <rect x="10" y="15" width="80" height="20" fill="none" stroke="#ccc" strokeWidth="2"/>
        <text x="50" y="30" textAnchor="middle" fontSize="16" fontWeight="900" fill="#666">UNIQUE</text>
        <text x="50" y="10" textAnchor="middle" fontSize="6" fill="#aaa">CREATIVE STUDIO</text>
        <text x="50" y="43" textAnchor="middle" fontSize="5" fill="#aaa">PREMIUM QUALITY</text>
      </svg>
    )
  },
  {
    id: 5,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <rect x="25" y="5" width="50" height="40" rx="5" fill="none" stroke="#ccc" strokeWidth="2"/>
        <text x="50" y="28" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#888">UNIQUE</text>
        <text x="50" y="38" textAnchor="middle" fontSize="5" fill="#aaa">PREMIUM</text>
      </svg>
    )
  },
  {
    id: 6,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <text x="50" y="32" textAnchor="middle" fontSize="18" fontFamily="cursive" fontStyle="italic" fontWeight="bold" fill="#888">Graphic</text>
        <text x="50" y="15" textAnchor="middle" fontSize="6" fill="#aaa">CREATIVE</text>
        <path d="M40,12 L60,12" stroke="#ccc" strokeWidth="1"/>
      </svg>
    )
  },
  {
    id: 7,
    content: (
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <polygon points="20,10 80,10 85,25 80,40 20,40 15,25" fill="none" stroke="#ccc" strokeWidth="2"/>
        <text x="50" y="29" textAnchor="middle" fontSize="14" fontWeight="800" fill="#888">SPECIAL</text>
        <text x="50" y="16" textAnchor="middle" fontSize="4" fill="#aaa">GUARANTEED</text>
      </svg>
    )
  }
];

const Clients = () => {
  const scrollRef = useRef(null);

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 255, behavior: 'smooth' }); // card width 240 + gap 15
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -255, behavior: 'smooth' });
    }
  };

  return (
    <section className="clients-section" id="clients">
      <div className="clients-wrapper">
        <button className="client-arrow prev" onClick={handlePrev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div className="clients-carousel-window" ref={scrollRef}>
          <div className="clients-track">
            {logos.map((item) => (
              <div className="client-card" key={`client-${item.id}`}>
                {item.content}
              </div>
            ))}
          </div>
        </div>

        <button className="client-arrow next" onClick={handleNext}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Clients;
