import React from 'react';
import './Pricing.css';

const pricingData = [
  {
    id: 1,
    title: 'Basic',
    bgLetter: 'B',
    price: '12.50',
    features: [
      'Lorem ipsum dolor sit a',
      'Met, consectetur adipisicing',
      'Elit sed do eiusmod',
      'Empor incididunt ut labore'
    ],
    isFeatured: false
  },
  {
    id: 2,
    title: 'Pro Plan',
    bgLetter: 'P',
    price: '25.50',
    features: [
      'Lorem ipsum dolor sit a',
      'Met, consectetur adipisicing',
      'Elit sed do eiusmod',
      'Empor incididunt ut labore',
      'Magna aliqua. quis',
      'Nostrud exercitation.'
    ],
    isFeatured: true
  },
  {
    id: 3,
    title: 'Premium',
    bgLetter: 'P',
    price: '18.50',
    features: [
      'Lorem ipsum dolor sit a',
      'Met, consectetur adipisicing',
      'Elit sed do eiusmod',
      'Empor incididunt ut labore'
    ],
    isFeatured: false
  }
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-header">
        <span className="subtitle">What i am taken from Client</span>
        <h2>MY PRICING</h2>
        <div className="separator">
          <div className="line"></div>
          <div className="hexagon-sep"></div>
          <div className="line"></div>
        </div>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t empor
          incididunt ut labore et dolore magna aliqua. quis nostrud exercitation.
        </p>
      </div>

      <div className="pricing-container">
        {pricingData.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
            {plan.isFeatured && <div className="popular-badge">MOST POPULAR</div>}

            <div className="plan-header">
              <h4 className="plan-title">{plan.title}</h4>
            </div>

            <div className="price-container">
              <span className="currency">$</span>
              <span className="price">{plan.price}</span>
              <span className="price-period">/mo</span>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <div className="icon-wrapper">
                    <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="select-btn">
              <span>GET STARTED</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
