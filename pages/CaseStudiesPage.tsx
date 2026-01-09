import React from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

const CaseStudiesPage: React.FC = () => {
  return (
    <section className='relative py-12 sm:py-16 md:py-20 min-h-screen'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Hero Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Real Projects. <span className="gradient-text">Real Execution.</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4'>
            A selection of ecommerce, design, and digital projects delivered by PixelPop Digi — focused on usability, performance, and business outcomes.
          </p>
          <p className='text-sm text-gray-500 italic'>
            Each case study highlights the challenge, approach, and solution — keeping results factual and transparent.
          </p>
        </div>

        {/* Case Studies */}
        <Portfolio />

        {/* CTA */}
        <div className='text-center glass-card rounded-3xl p-12 mt-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Like What You See?</h2>
          <p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
            If you're looking for a partner who values clarity, execution quality, and measurable outcomes, let's talk.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link to="/contact" className='btn-primary'>
              Discuss Your Project
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

export default CaseStudiesPage;

