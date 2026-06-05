import React from 'react';
import AnimatedPage from './AnimatedPage';
import SEO from './SEO';
import './Blog.css';
import blogImg1 from '../assets/blog1.webp';

const blogData = [
  {
    id: 1,
    date: 'SEP 12, 2017',
    title: 'A portrait is not made in the camera but on either side of it.',
    image: blogImg1
  },
  {
    id: 2,
    date: 'OCT 4, 2017',
    title: 'Bad design is smoke, while good design is a mirror.',
    image: blogImg1
  }
];

const Blog = () => {
  return (
    <AnimatedPage>
      <SEO title="Blog" description="Read the latest articles and thoughts on UI/UX design and frontend development by Khushbu Gurjar." />
      <section className="blog-section" id="blog">
      <div className="section-header">
        <span className="subtitle">What i am thinking</span>
        <h2>LATEST BLOG</h2>
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

      <div className="blog-container">
        {blogData.map((blog) => (
          <div key={blog.id} className="blog-card" style={{ backgroundImage: `url(${blog.image})` }}>
            <div className="blog-overlay">
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3 className="blog-title">{blog.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="blog-footer">
        <button className="view-all-btn">VIEW ALL</button>
      </div>
      </section>
    </AnimatedPage>
  );
};

export default Blog;
