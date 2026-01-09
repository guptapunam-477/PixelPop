import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className='relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden'>
      <div className='relative max-w-5xl mx-auto z-10 glass-card rounded-3xl p-6 sm:p-8 md:p-12'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight smooth-bounce-in'>
          We Build & Scale <span className="gradient-text">High-Conversion Shopify Brands</span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed smooth-bounce-in delay-1'>
          PixelPop Digi is a D2C-focused ecommerce agency helping brands design, launch, and grow profitable Shopify stores through performance marketing, conversion-driven UX, and scalable technology.
        </p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-10 max-w-4xl mx-auto smooth-bounce-in delay-1'>
          {[
            'Shopify-first development & design',
            'Revenue-focused Google & Meta Ads',
            'SEO built for long-term growth',
            'UX that turns traffic into customers'
          ].map((point, index) => (
            <div key={index} className='flex items-start justify-center sm:justify-start'>
              <svg className="w-5 h-5 text-[#3CC61A] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className='text-sm sm:text-base text-gray-700'>{point}</span>
            </div>
          ))}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center smooth-bounce-in delay-2'>
          <Link to="/contact" className='btn-primary pulse-glow'>
            Start Your Project
          </Link>
          <Link to="/case-studies" className='btn-secondary'>
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;