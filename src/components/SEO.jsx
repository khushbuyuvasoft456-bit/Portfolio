import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, url, image }) => {
  const siteName = 'Khushbu Gurjar Portfolio';
  const defaultTitle = 'Khushbu Gurjar - UI/UX Designer & Developer';
  const defaultDescription = 'Portfolio of Khushbu Gurjar, a passionate UI/UX Designer and Frontend Developer. Discover my work, services, and creative process.';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      
      {/* Open Graph / Facebook tags */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta property='og:description' content={description || defaultDescription} />
      <meta property='og:site_name' content={siteName} />
      {url && <meta property='og:url' content={url} />}
      {image && <meta property='og:image' content={image} />}
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name || 'Khushbu Gurjar'} />
      <meta name='twitter:card' content={type === 'article' ? 'summary_large_image' : 'summary'} />
      <meta name='twitter:title' content={title ? `${title} | ${siteName}` : defaultTitle} />
      <meta name='twitter:description' content={description || defaultDescription} />
      {image && <meta name='twitter:image' content={image} />}
    </Helmet>
  );
};

export default SEO;
