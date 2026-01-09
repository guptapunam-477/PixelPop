import React from 'react';
import { Link } from 'react-router-dom';

const UIDesignPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            UI/UX Design That <span className="gradient-text">Converts Visitors Into Customers</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            We design intuitive, conversion-focused ecommerce experiences that reduce friction, build trust, and drive repeat purchases.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Request a UX Audit
            </Link>
            <Link to="/case-studies" className='btn-secondary'>
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Overview */}
        <div className='mb-16'>
          <p className='text-lg text-gray-700 mb-12 text-center'>
            Great ecommerce design isn't about looking good — it's about guiding users smoothly from discovery to checkout. Our UI/UX process is rooted in clarity, usability, and measurable outcomes.
          </p>

          {/* UX Research */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>UX Research & Strategy</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Understanding users, their intent, and friction points before designing solutions.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Business & product understanding</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>User journey mapping</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Funnel & behavior analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>UX heuristics evaluation</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Outcome</p>
            <p className='text-gray-700'>Design decisions backed by insight, not assumptions.</p>
          </div>

          {/* Ecommerce UX */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Ecommerce UX Design</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Designing user flows that make browsing, product discovery, and purchasing effortless.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Homepage & landing page UX</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Collection & product detail page UX</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Cart & checkout experience optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mobile usability improvements</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Why It Matters</p>
            <p className='text-gray-700'>Small UX improvements can significantly impact conversion rates and average order value.</p>
          </div>

          {/* UI Design */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>UI Design & Visual Systems</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Creating visually consistent, brand-aligned interfaces that scale.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>UI design for web & mobile</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Design systems & component libraries</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Typography, color & spacing systems</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>High-fidelity mockups & prototypes</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Outcome</p>
            <p className='text-gray-700'>A polished brand experience across all touchpoints.</p>
          </div>

          {/* Conversion-Focused Design */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Conversion-Focused Design Enhancements</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Design improvements specifically aimed at increasing trust and reducing drop-offs.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Trust signals & credibility elements</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>CTA hierarchy & placement</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Visual clarity & content prioritization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Micro-interactions & feedback states</span>
              </li>
            </ul>
          </div>

          {/* Performance & Accessibility */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Design for Performance & Accessibility</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Ensuring design choices support speed, usability, and inclusivity.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Performance-aware design decisions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Accessibility best practices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Responsive layouts across devices</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Collaboration with developers for feasibility</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Our UI/UX Design Process</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { step: '1', title: 'Discovery & Audit', desc: 'Understanding business goals, users, and current design gaps.' },
              { step: '2', title: 'UX Planning', desc: 'Wireframes, flows, and information architecture.' },
              { step: '3', title: 'UI Design', desc: 'High-fidelity designs aligned with brand and usability goals.' },
              { step: '4', title: 'Validation & Handoff', desc: 'Feedback loops, refinements, and developer-ready handoff.' }
            ].map((item) => (
              <div key={item.step} className='glass-card rounded-3xl p-6'>
                <div className='glass-strong rounded-full w-12 h-12 flex items-center justify-center font-bold text-[#5A99FC] mb-4'>{item.step}</div>
                <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Who This Is For</h2>
          <ul className='space-y-3 text-gray-700 max-w-2xl mx-auto'>
            {[
              'Shopify & D2C brands seeking higher conversions',
              'Businesses redesigning or scaling their store',
              'Teams needing consistent, scalable design systems'
            ].map((point) => (
              <li key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Why PixelPop Digi for UI/UX?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'Ecommerce-focused UX expertise',
              'Strong collaboration between design & marketing',
              'Practical, conversion-driven design approach',
              'Clear documentation & handoff'
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
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Design Experiences That Drive Growth</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Let's identify UX opportunities and design experiences that convert and scale.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Request a UX Audit
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

export default UIDesignPage;

