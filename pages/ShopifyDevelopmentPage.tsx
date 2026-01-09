import React from 'react';
import { Link } from 'react-router-dom';

const ShopifyDevelopmentPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Shopify Development <span className="gradient-text">Built for D2C Growth</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            We design, build, and optimize Shopify stores that are fast, scalable, and conversion-focused — tailored for modern D2C brands.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Get a Shopify Consultation
            </Link>
            <Link to="/case-studies" className='btn-secondary'>
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Services Overview */}
        <div className='mb-16'>
          <p className='text-lg text-gray-700 mb-12 text-center'>
            Whether you're launching a new D2C brand or improving an existing Shopify store, we provide end-to-end Shopify development services aligned with business goals.
          </p>

          {/* Shopify Store Setup & Launch */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify Store Setup & Launch</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Complete Shopify store setup for brands starting from scratch or moving from another platform.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Shopify account setup & configuration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Store structure (products, collections, navigation)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Payment gateways & tax configuration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Shipping rules & checkout setup</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Domain connection & launch readiness</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Best For</p>
            <p className='text-gray-700'>New D2C brands and founders launching MVP stores.</p>
          </div>

          {/* Custom Theme Design & Development */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Custom Shopify Theme Design & Development</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Custom-designed Shopify themes focused on brand identity, usability, and conversion.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>UX wireframes & user flow planning</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Custom UI design aligned with brand guidelines</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Theme customization or custom theme development</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Mobile-first & responsive layouts</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Speed & performance optimization</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Why It Matters</p>
            <p className='text-gray-700'>A well-designed theme reduces friction, improves trust, and increases conversion rates.</p>
          </div>

          {/* Store Redesign & Optimization */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify Store Redesign & Optimization</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Improving underperforming Shopify stores through UX, UI, and performance enhancements.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>UX & conversion audit</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Homepage, PDP & collection page optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Checkout & cart improvements</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Speed, Core Web Vitals & performance fixes</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Best For</p>
            <p className='text-gray-700'>Existing stores with traffic but low conversions, or brands planning a visual or UX refresh.</p>
          </div>

          {/* App Integrations & Automation */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify App Integrations & Automation</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Integrating the right apps and automations to streamline operations and improve customer experience.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>App selection & evaluation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Third-party integrations (payments, logistics, CRM)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Inventory & order automation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Custom workflows using Shopify apps</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Outcome</p>
            <p className='text-gray-700'>Reduced manual work, fewer errors, and smoother operations.</p>
          </div>

          {/* Store Migration */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify Store Migration</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Safe and structured migration from platforms like WooCommerce, Magento, or custom systems to Shopify.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Product, customer & order data migration</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>URL structure & SEO preservation</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Theme recreation or redesign</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Testing & zero-downtime launch</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Risk Mitigation</p>
            <p className='text-gray-700'>We follow a checklist-driven migration process to avoid data loss and SEO issues.</p>
          </div>

          {/* Shopify Plus */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Shopify Plus & Scalable Architecture</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Advanced Shopify solutions for fast-growing or high-volume brands.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Shopify Plus setup & customization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Performance optimization for scale</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Advanced checkout customization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Integration planning for growth</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Our Shopify Development Process</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { step: '1', title: 'Discovery & Requirements', desc: 'We understand your brand, products, customers, and growth goals.' },
              { step: '2', title: 'UX & Planning', desc: 'User journeys, wireframes, and technical planning.' },
              { step: '3', title: 'Design & Development', desc: 'UI design, Shopify build, integrations, and testing.' },
              { step: '4', title: 'Launch & Support', desc: 'Launch readiness checks, deployment, and post-launch support.' }
            ].map((item) => (
              <div key={item.step} className='glass-card rounded-3xl p-6'>
                <div className='glass-strong rounded-full w-12 h-12 flex items-center justify-center font-bold text-[#5A99FC] mb-4'>{item.step}</div>
                <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Why Choose PixelPop Digi for Shopify?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'D2C-focused Shopify expertise',
              'Design + development under one roof',
              'Conversion & performance mindset',
              'Transparent timelines & communication'
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
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Let's Build a Shopify Store That Converts</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Whether you're launching or scaling, we help you get the most out of Shopify.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Book a Free Shopify Consultation
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

export default ShopifyDevelopmentPage;

