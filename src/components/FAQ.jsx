import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqData = [
  {
    id: 1,
    question: "I'm not getting pinged at the store?",
    answer: "Ut ut ullamcorper leo, eget euismod lectus algo este. Lorem ipsum dolor sit amet, consectetur eros tuo adipiscing elit. Ipsuisum nibh id elit. Duis sed odio sitamet nibh vulputate cursus a sit amet mauris. Eget euismod lectus algo este. Lorem ipsum dolor sit amet, consectetur eros tuo adipiscing elit. Ipsuisum nibh id elit. Duis sed odio sitamet nibh vulputate cursus a sit amet mauris."
  },
  {
    id: 2,
    question: "When will yella be in more stores?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    question: "Are you developing Apple watch app?",
    answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 4,
    question: "Why you required Bluetooth be on?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        {/* Left Side: Visuals */}
        <div className="faq-visuals">
          <div className="faq-bg-text">FAQ</div>
          <div className="faq-image-wrapper">
             <div className="question-mark">?</div>
             <img 
                src="https://img.freepik.com/free-photo/pensive-man-thinking-looking-up_23-2148192660.jpg" 
                alt="Thinking Man" 
                className="thinking-man-img"
             />
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="faq-list">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${openId === item.id ? 'active' : ''}`}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <div className="faq-question-row">
                <span className="faq-q-icon">Q</span>
                <h4 className="faq-question">{item.question}</h4>
              </div>
              
              {openId === item.id && (
                <div className="faq-answer-row">
                  <span className="faq-a-icon">A.</span>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
          
          <div className="faq-footer-action" style={{ marginTop: '2rem' }}>
            <Link to="/faq" className="view-all-faq-btn">VIEW ALL FAQs</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

