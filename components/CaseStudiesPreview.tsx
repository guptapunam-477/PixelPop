import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen';

const CaseStudiesPreview: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-2'>
            Real projects. Real outcomes.
          </p>
          <p className='text-sm text-gray-500 italic'>
            (Only showcase case studies already present on PixelPopDigi.com. Do not add or invent new ones.)
          </p>
        </div>

        <div className='text-center mb-8'>
          <Link to="/case-studies" className='btn-primary'>
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;

