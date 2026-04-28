import React from 'react';
import './PricingPage.css';

const pricingPlans = [
  {
    id: 1,
    title: 'BASIC',
    price: '49',
    duration: 'Month',
    features: [
      'Single Page Design',
      'Basic SEO Optimization',
      'Mobile Responsive',
      'Contact Form',
      '2 Rounds of Revision'
    ],
    isFeatured: false,
    bgLetter: 'B'
  },
  {
    id: 2,
    title: 'PROFESSIONAL',
    price: '99',
    duration: 'Month',
    features: [
      'Multi-Page Website',
      'Advanced SEO',
      'Custom Animations',
      'E-commerce Integration',
      'Priority Support',
      '5 Rounds of Revision'
    ],
    isFeatured: true,
    bgLetter: 'P'
  },
  {
    id: 3,
    title: 'PREMIUM',
    price: '199',
    duration: 'Month',
    features: [
      'Custom Web Application',
      'API Integrations',
      'Advanced Security',
      'Performance Tuning',
      'Dedicated Manager',
      'Unlimited Revisions'
    ],
    isFeatured: false,
    bgLetter: 'E'
  }
];

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <header className="page-header pricing-header">
        <div className="container">
          <span className="subtitle">Service Plans</span>
          <h1>OUR PRICING</h1>
          <div className="separator">
            <span className="line"></span>
            <span className="hexagon"></span>
            <span className="line"></span>
          </div>
          <p className="header-text">
            Choose the perfect plan for your business needs. Transparent pricing 
            with no hidden costs. We provide high-quality solutions for every budget.
          </p>
        </div>
      </header>

      <main className="pricing-main-content">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
                <div className="card-bg-letter">{plan.bgLetter}</div>
                <div className="card-content">
                  <h3 className="plan-title">{plan.title}</h3>
                  <div className="price-tag">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="duration">/{plan.duration}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="choose-plan-btn">GET STARTED</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="pricing-faq">
        <div className="container">
          <div className="section-title">
            <h2>Pricing FAQ</h2>
            <p>Answers to common questions about our billing and plans.</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I cancel my subscription anytime?</h3>
              <p>Yes, you can cancel your monthly subscription at any time. There are no long-term contracts or cancellation fees.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer annual discounts?</h3>
              <p>Yes! If you choose to pay annually, you get 2 months for free (approx. 17% discount).</p>
            </div>
            <div className="faq-item">
              <h3>Can I switch plans later?</h3>
              <p>Absolutely. You can upgrade or downgrade your plan at any time. The price difference will be prorated.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, PayPal, and bank transfers for larger projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-quote">
        <div className="container">
          <div className="quote-box">
            <h2>Need a Custom Solution?</h2>
            <p>If your project doesn't fit into our standard plans, let's talk and create a custom package just for you.</p>
            <button className="quote-btn">REQUEST A CUSTOM QUOTE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
