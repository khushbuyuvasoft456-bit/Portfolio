import React, { useState } from 'react';
import './FAQPage.css';

const faqData = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A standard website usually takes 2-4 weeks, while more complex applications might take 2-3 months. I provide a detailed timeline during our initial consultation."
  },
  {
    id: 2,
    question: "What is your pricing structure?",
    answer: "I offer both project-based and hourly pricing. For standard websites, I have fixed packages. For custom solutions, I provide a quote based on the specific requirements and estimated hours."
  },
  {
    id: 3,
    question: "Do you offer post-launch support?",
    answer: "Yes, I offer various maintenance and support plans to ensure your website remains up-to-date, secure, and performing at its best. This includes regular backups, security patches, and minor updates."
  },
  {
    id: 4,
    question: "Which technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Node.js, and various CSS frameworks. I also have extensive experience with WordPress and Shopify for e-commerce solutions."
  },
  {
    id: 5,
    question: "Can you help with SEO and digital marketing?",
    answer: "While my primary focus is on design and development, I build all websites with SEO best practices in mind. For more intensive digital marketing campaigns, I can recommend trusted partners I work with."
  },
  {
    id: 6,
    question: "How do we get started on a project?",
    answer: "Simply reach out via the contact form with a brief description of your project. We'll then schedule a discovery call to discuss your goals, budget, and timeline in more detail."
  }
];

const FAQPage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-page">
      <header className="page-header faq-header">
        <div className="container">
          <span className="subtitle">Common Questions</span>
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          <div className="separator">
            <span className="line"></span>
            <span className="hexagon"></span>
            <span className="line"></span>
          </div>
          <p className="header-text">
            Find answers to common questions about my services, process, and pricing. 
            If you can't find what you're looking for, feel free to reach out directly.
          </p>
        </div>
      </header>

      <main className="faq-main-content">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-accordion">
              {faqData.map((item) => (
                <div 
                  key={item.id} 
                  className={`faq-card ${openId === item.id ? 'open' : ''}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <div className="faq-card-header">
                    <h3>{item.question}</h3>
                    <span className="toggle-icon">
                      {openId === item.id ? '−' : '+'}
                    </span>
                  </div>
                  <div className="faq-card-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="faq-sidebar">
              <div className="contact-card">
                <h3>Still have questions?</h3>
                <p>If you couldn't find the answer to your question in our FAQ, you can always contact us. We will answer you shortly!</p>
                <button className="contact-btn">GET IN TOUCH</button>
              </div>
              
              <div className="quick-stats">
                <div className="stat-item">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <section className="faq-cta">
        <div className="container">
          <h2>Ready to start your next project?</h2>
          <p>Let's create something exceptional together.</p>
          <button className="cta-btn">HIRE ME NOW</button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
