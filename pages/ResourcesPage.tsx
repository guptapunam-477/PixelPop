import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Practical Resources for <span className="gradient-text">D2C & Shopify Growth</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4'>
            Guides, insights, and tools created by PixelPop Digi to help ecommerce brands make better decisions across Shopify, marketing, and UX.
          </p>
          <p className='text-sm text-gray-500 italic'>
            No fluff. No gated hype. Just actionable knowledge.
          </p>
        </div>

        {/* Resource Categories */}
        <div className='space-y-8 mb-16'>
          {/* Shopify Guides */}
          <div className='glass-card rounded-3xl p-8'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify Guides</h2>
            <p className='text-gray-700 mb-6'>
              Actionable content focused on building, optimizing, and scaling Shopify stores.
            </p>
            <div className='space-y-3'>
              {[
                'Shopify Store Launch Checklist',
                'Common Shopify UX Mistakes to Avoid',
                'Choosing the Right Shopify Apps for Your Store'
              ].map((item) => (
                <div key={item} className='flex items-start'>
                  <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className='text-gray-700'>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Marketing Playbooks */}
          <div className='glass-card rounded-3xl p-8'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Growth Marketing Playbooks</h2>
            <p className='text-gray-700 mb-6'>
              Resources focused on acquisition, retention, and performance optimization.
            </p>
            <div className='space-y-3'>
              {[
                'Google Ads Setup for D2C Brands',
                'Meta Ads Creative Testing Framework',
                'SEO Basics for Shopify Stores'
              ].map((item) => (
                <div key={item} className='flex items-start'>
                  <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className='text-gray-700'>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX & Conversion Resources */}
          <div className='glass-card rounded-3xl p-8'>
            <div className="mb-6">
              <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
            </div>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>UI/UX & Conversion Resources</h2>
            <p className='text-gray-700 mb-6'>
              Design-focused content tied directly to ecommerce outcomes.
            </p>
            <div className='space-y-3'>
              {[
                'Ecommerce UX Heuristics Checklist',
                'Optimizing Product Pages for Conversion',
                'Mobile UX Best Practices for Shopify'
              ].map((item) => (
                <div key={item} className='flex items-start'>
                  <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className='text-gray-700'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>How to Use These Resources</h2>
          <ul className='space-y-3 text-gray-700 max-w-2xl mx-auto'>
            {[
              'Founders planning a Shopify launch',
              'Teams auditing existing stores',
              'Marketers improving acquisition efficiency'
            ].map((point) => (
              <li key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className='text-sm text-gray-500 text-center mt-6 italic'>
            Resources are designed to complement — not replace — professional execution.
          </p>
        </div>

        {/* CTA */}
        <div className='text-center glass-card rounded-3xl p-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Need Help Implementing What You've Learned?</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Resources are a starting point. If you want hands-on execution, we're here to help.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Book a Strategy Call
            </Link>
            <Link to="/services" className='btn-secondary'>
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;

