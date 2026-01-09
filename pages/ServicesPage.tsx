import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            We partner with ambitious ecommerce brands to handle everything required to grow a successful D2C business — from Shopify development to traffic acquisition and conversion optimization.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='glass-card rounded-3xl p-8 h-full flex flex-col'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>Shopify Development</h3>
            <p className='text-base text-gray-700 mb-6 flex-grow'>
              We design and build fast, scalable Shopify stores optimized for performance, usability, and conversions.
            </p>
            <Link to="/services/shopify-development" className='btn-primary text-center'>
              Explore Shopify Services
            </Link>
          </div>

          <div className='glass-card rounded-3xl p-8 h-full flex flex-col'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>Growth Marketing</h3>
            <p className='text-base text-gray-700 mb-6 flex-grow'>
              We drive qualified traffic and measurable revenue using paid media and organic growth strategies.
            </p>
            <Link to="/services/growth-marketing" className='btn-primary text-center'>
              Explore Growth Marketing
            </Link>
          </div>

          <div className='glass-card rounded-3xl p-8 h-full flex flex-col'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>UI/UX Design</h3>
            <p className='text-base text-gray-700 mb-6 flex-grow'>
              We design intuitive user experiences that reduce friction and increase purchase confidence.
            </p>
            <Link to="/services/ui-ux-design" className='btn-primary text-center'>
              Explore UI/UX Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

