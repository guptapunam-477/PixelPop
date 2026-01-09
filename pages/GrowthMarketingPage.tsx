import React from 'react';
import { Link } from 'react-router-dom';

const GrowthMarketingPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Performance Marketing & SEO for <span className="gradient-text">Scalable D2C Growth</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            We help Shopify brands acquire the right customers, improve conversion efficiency, and grow revenue through paid media, SEO, and continuous optimization.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Book a Growth Audit
            </Link>
            <Link to="/case-studies" className='btn-secondary'>
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Overview */}
        <div className='mb-16'>
          <p className='text-lg text-gray-700 mb-12 text-center'>
            Traffic alone doesn't grow a D2C business. We combine paid acquisition, organic growth, and conversion optimization to create predictable and scalable ecommerce growth systems.
          </p>

          {/* Google Ads */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Google Ads Management</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Strategic planning, execution, and optimization of Google Ads campaigns tailored for ecommerce.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Account & conversion tracking setup</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Search, Shopping & Performance Max campaigns</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Keyword & intent mapping</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Product feed optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Ongoing bid, budget & creative optimization</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Why It Matters</p>
            <p className='text-gray-700'>Google captures high-intent demand. When structured correctly, it becomes a consistent revenue driver.</p>
          </div>

          {/* Meta Ads */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Meta Ads (Facebook & Instagram)</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Paid social campaigns designed to generate demand, retarget users, and scale winning creatives.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Audience research & funnel mapping</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Creative strategy & testing framework</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Campaign setup & optimization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Retargeting & lifecycle campaigns</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Performance analysis & iteration</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Outcome</p>
            <p className='text-gray-700'>Sustainable customer acquisition with controlled costs and scalable performance.</p>
          </div>

          {/* SEO */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Search Engine Optimization (SEO)</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Long-term organic growth through technical SEO, on-page optimization, and content strategy.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Technical SEO audit (site structure, speed, indexing)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Keyword research & mapping to pages</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>On-page SEO for collections & PDPs</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Content strategy for ecommerce blogs & guides</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Ongoing performance tracking</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Why It Matters</p>
            <p className='text-gray-700'>SEO compounds over time and reduces dependency on paid acquisition.</p>
          </div>

          {/* CRO */}
          <div className='glass-card rounded-3xl p-8 mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4 text-[#1a202c]'>Conversion Rate Optimization (CRO) & Analytics</h2>
            <p className='text-gray-600 mb-4 font-semibold'>What This Is</p>
            <p className='text-gray-700 mb-6'>Improving the percentage of visitors who convert into customers.</p>
            <p className='text-gray-600 mb-4 font-semibold'>What We Do</p>
            <ul className='space-y-2 text-gray-700 mb-6'>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Funnel & user behavior analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Heatmaps & session recordings</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>UX & copy optimization recommendations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>A/B testing roadmap</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Analytics dashboards & reporting</span>
              </li>
            </ul>
            <p className='text-gray-600 font-semibold'>Outcome</p>
            <p className='text-gray-700'>More revenue from the same traffic.</p>
          </div>
        </div>

        {/* Process */}
        <div className='mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>Our Growth Marketing Process</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { step: '1', title: 'Audit & Benchmarking', desc: 'We analyze your current traffic, funnels, and performance metrics.' },
              { step: '2', title: 'Strategy & Planning', desc: 'Channel mix, budget allocation, and KPI definition.' },
              { step: '3', title: 'Execution', desc: 'Campaign launches, SEO implementation, and tracking setup.' },
              { step: '4', title: 'Optimization & Scale', desc: 'Continuous testing, refinement, and scaling of what works.' }
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
              'Shopify brands looking to scale profitably',
              'D2C businesses with validated products',
              'Founders seeking predictable acquisition channels'
            ].map((point) => (
              <li key={point} className='flex items-start'>
                <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className='text-sm text-gray-500 text-center mt-4 italic'>(We avoid overpromising results and focus on sustainable growth.)</p>
        </div>

        {/* Why Choose */}
        <div className='glass-card rounded-3xl p-8 mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Why PixelPop Digi for Growth Marketing?</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              'Ecommerce-first marketing mindset',
              'Deep understanding of Shopify funnels',
              'Transparent reporting & communication',
              'Design, UX & marketing alignment'
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
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to Grow Your D2C Brand?</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            Let's identify growth opportunities and build a performance-driven acquisition strategy.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Book a Free Growth Audit
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

export default GrowthMarketingPage;

