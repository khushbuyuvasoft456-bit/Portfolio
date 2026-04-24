import React, { useEffect, useState } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'HTML5', value: 78, color: '#FFB822' },
  { name: 'WORDPRESS', value: 79, color: '#FF5B5C' },
  { name: 'JQUERY', value: 76, color: '#00BCD4' },
  { name: 'PHOTOSHOP', value: 77, color: '#8BC34A' },
  { name: 'ILLUSTRATOR', value: 80, color: '#7B61FF' }
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Simple intersection observer or timeout to trigger animation
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <span className="subtitle">What I know</span>
        <h2>SKILLS</h2>
        <div className="separator">
           <span className="line"></span>
           <span className="hexagon"></span>
           <span className="line"></span>
        </div>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consecttetur adipisicing elit, sed do eiusmod t <br />
          empor incididunt ut labore et dolore magna aliqua. quis nostrud exercitat ion.
        </p>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => {
          // Circular math
          const radius = 45;
          const circumference = 2 * Math.PI * radius;
          // dashOffset based on percentage (if animated, value, else 0 progress)
          const strokeDashoffset = animated 
            ? circumference - (skill.value / 100) * circumference 
            : circumference;

            return (
            <div className="skill-item" key={skill.name}>
              <div className="skill-circle-wrapper">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  {/* Background ring */}
                  <circle 
                    cx="50" cy="50" r={radius} 
                    fill="none" stroke="#f0f0f0" strokeWidth="6" 
                  />
                  {/* Progress ring */}
                  <circle 
                    cx="50" cy="50" r={radius} 
                    fill="none" stroke="#d1d5db" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    transform="rotate(-90 50 50)"
                  />
                  {/* Inner Colored Circle */}
                  <circle 
                    cx="50" cy="50" r="37" 
                    fill={skill.color} 
                  />
                </svg>
                
                <div className="skill-text-overlay">
                  <span className="skill-value">{skill.value}</span>
                  <span className="skill-percent">%</span>
                </div>
              </div>
              <h4 className="skill-name">{skill.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
