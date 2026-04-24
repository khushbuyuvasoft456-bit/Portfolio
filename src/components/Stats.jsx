import React from 'react';
import './Stats.css';

const statsData = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="1"></rect>
        <path d="M12 16v5"></path>
        <path d="M9 21l3-5 3 5"></path>
        <path d="M7 11l3-3 4 4 3-3"></path>
      </svg>
    ),
    number: "186",
    label: "Launched Projects"
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2"></line>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2"></line>
      </svg>
    ),
    number: "150",
    label: "Happy Customers"
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
        <line x1="12" y1="2" x2="12" y2="4"></line>
        <line x1="12" y1="20" x2="12" y2="22"></line>
        <line x1="2" y1="12" x2="4" y2="12"></line>
        <line x1="20" y1="12" x2="22" y2="12"></line>
      </svg>
    ),
    number: "48000",
    label: "Working Hours"
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8"></path>
        <path d="M12 15v7"></path>
        <path d="M5 3l.75 8a6.5 6.5 0 0 0 12.5 0L19 3H5z"></path>
        <line x1="6" y1="8" x2="18" y2="8"></line>
      </svg>
    ),
    number: "8400",
    label: "Coffee Cups"
  }
];

const Stats = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">
        {statsData.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-hexagon">
              <div className="hexagon-inner">
                {stat.icon}
              </div>
            </div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
