import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Industries: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  const industries = [
    'D2C consumer brands',
    'Fashion & lifestyle',
    'Beauty & personal care',
    'Health & wellness',
    'Niche ecommerce startups'
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Industries & <span className="gradient-text">Use Cases</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            We work with:
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4'>
          {industries.map((industry, index) => (
            <div key={index} className={`glass-card rounded-2xl px-6 py-3 reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${index * 0.05}s` }}>
              <span className='text-gray-700 font-medium'>{industry}</span>
            </div>
          ))}
        </div>
        <p className='text-sm text-gray-500 text-center mt-6 italic'>
          (Avoid over-claiming; keep this aligned with actual experience.)
        </p>
      </div>
    </section>
  );
};

export default Industries;

