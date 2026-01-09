import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Built for D2C Brands That Want to <span className="gradient-text">Grow Right</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            PixelPop Digi is a digital agency focused on helping ecommerce and D2C brands design, build, and scale sustainable growth systems across Shopify, marketing, and UX.
          </p>
        </div>

        {/* Our Story */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-[#1a202c]'>Our Story</h2>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            PixelPop Digi was created to bridge the gap between good design and real business outcomes.
          </p>
          <p className='text-gray-700 mb-4 leading-relaxed'>
            Many brands struggle with fragmented execution — developers build stores, marketers run ads, designers focus on visuals — but no one owns the full customer journey. PixelPop Digi was founded to solve that problem.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            We work at the intersection of <strong>design, technology, and growth</strong>, ensuring every decision supports usability, performance, and revenue.
          </p>
        </div>

        {/* What We Believe In */}
        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center'>What We Believe In</h2>
          <div className='space-y-6'>
            {[
              {
                title: 'Ecommerce Is a System',
                desc: 'A Shopify store, ads, SEO, and UX are not separate efforts. They are interconnected parts of a single growth system.'
              },
              {
                title: 'Clarity Over Complexity',
                desc: 'We believe in simple, understandable solutions that teams can maintain and scale — not over-engineered setups.'
              },
              {
                title: 'Design With Purpose',
                desc: 'Design should guide users, reduce friction, and build trust — not just look good.'
              },
              {
                title: 'Sustainable Growth',
                desc: 'We prioritize long-term performance over short-term hacks or vanity metrics.'
              }
            ].map((item, index) => (
              <div key={index} className='glass-card rounded-3xl p-6'>
                <h3 className='font-bold text-xl mb-3'>{item.title}</h3>
                <p className='text-gray-700'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-[#1a202c]'>What We Do</h2>
          <p className='text-gray-700 mb-6'>
            We help D2C brands:
          </p>
          <ul className='space-y-3 text-gray-700 mb-6'>
            {[
              'Launch and scale Shopify stores',
              'Improve conversion rates through UX',
              'Acquire customers through paid and organic channels',
              'Build scalable digital foundations'
            ].map((point) => (
              <li key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className='text-gray-600 text-sm italic'>
            Our services are designed to support brands at different stages — from early launch to growth and optimization.
          </p>
        </div>

        {/* How We Work */}
        <div className='mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-8 text-center'>How We Work</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                title: 'Collaborative by Default',
                desc: 'We work closely with founders and internal teams, maintaining transparency at every stage.'
              },
              {
                title: 'Structured & Process-Driven',
                desc: 'Clear scopes, timelines, and deliverables ensure predictability and accountability.'
              },
              {
                title: 'Data-Informed Decisions',
                desc: 'We rely on user behavior, performance data, and testing — not assumptions.'
              }
            ].map((item, index) => (
              <div key={index} className='glass-card rounded-3xl p-6'>
                <h3 className='font-bold text-lg mb-3'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Who We Work With</h2>
          <ul className='space-y-3 text-gray-700 max-w-2xl mx-auto'>
            {[
              'D2C & ecommerce brands',
              'Shopify-based businesses',
              'Founders and small teams',
              'Growth-stage companies'
            ].map((point) => (
              <li key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className='text-sm text-gray-500 text-center mt-4 italic'>(We focus on fit over volume.)</p>
        </div>

        {/* Our Team */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-[#1a202c]'>Our Team</h2>
          <p className='text-gray-700 leading-relaxed'>
            PixelPop Digi is a small, focused team of designers, developers, and marketers who care deeply about execution quality.
          </p>
          <p className='text-gray-700 mt-4 leading-relaxed'>
            Rather than outsourcing critical work, we keep strategy, design, and implementation closely aligned.
          </p>
        </div>

        {/* Why PixelPop Digi */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Why PixelPop Digi</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'D2C-first mindset',
              'End-to-end ownership',
              'Clear communication & documentation',
              'Practical, results-oriented execution'
            ].map((point) => (
              <div key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className='text-gray-700'>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center glass-card rounded-3xl p-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Looking for a Long-Term D2C Partner?</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            If you value clarity, execution quality, and sustainable growth, we'd love to explore working together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Book a Strategy Call
            </Link>
            <Link to="/contact" className='btn-secondary'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

