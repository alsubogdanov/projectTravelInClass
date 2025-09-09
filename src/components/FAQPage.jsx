import React from 'react';
import Hero from './Hero';

function FAQPage() {
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'FAQ',
    text: 'Home / FAQ',
  };
  return (
    <div>
      <Hero content={heroContent} />
    </div>
  );
}

export default FAQPage;
