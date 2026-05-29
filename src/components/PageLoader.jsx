import React from 'react';
import './SkeletonLoader.css';

const PageLoader = () => {
  return (
    <div style={{ padding: '120px 5% 50px', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="skeleton skeleton-title" style={{ width: '40%', height: '3rem' }}></div>
      <div className="skeleton skeleton-desc" style={{ width: '100%', height: '1.5rem' }}></div>
      <div className="skeleton skeleton-desc" style={{ width: '80%', height: '1.5rem' }}></div>
      <div className="skeleton skeleton-desc" style={{ width: '60%', height: '1.5rem' }}></div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        <div className="skeleton" style={{ height: '250px' }}></div>
        <div className="skeleton" style={{ height: '250px' }}></div>
        <div className="skeleton" style={{ height: '250px' }}></div>
      </div>
    </div>
  );
};

export default PageLoader;
