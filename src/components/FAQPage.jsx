import React from 'react';
import Hero from './Hero';
import FAQ from './FAQ';

function FAQPage() {
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'FAQ',
    text: 'Home / FAQ',
  };
  return (
    <div>
      <Hero content={heroContent} />
      <div className='container'>
        <div className='faq__wrap d-flex jcsb  mt10 mb10'>
          <FAQ />
          <div className='faq__form'>faq form</div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
