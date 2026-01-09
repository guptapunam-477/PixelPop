import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const TrustStrip: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  return (
    <section className='relative py-8 sm:py-12'>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 reveal ${isVisible ? 'active' : ''}`}>
        <div className='text-center'>
          <p className='text-base sm:text-lg text-gray-600 mb-6'>
            Trusted by growing D2C brands and startups
          </p>
          <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
            {/* Placeholder for client logos - replace with actual logos */}
            <div className='glass-card rounded-xl p-4 h-16 flex items-center justify-center'>
              <span className='text-gray-400 text-sm'>Client Logo</span>
            </div>
            <div className='glass-card rounded-xl p-4 h-16 flex items-center justify-center'>
              <span className='text-gray-400 text-sm'>Client Logo</span>
            </div>
            <div className='glass-card rounded-xl p-4 h-16 flex items-center justify-center'>
              <span className='text-gray-400 text-sm'>Client Logo</span>
            </div>
            <div className='glass-card rounded-xl p-4 h-16 flex items-center justify-center'>
              <span className='text-gray-400 text-sm'>Client Logo</span>
            </div>
          </div>
          <p className='text-xs text-gray-500 mt-4 italic'>
            (Use ONLY existing PixelPop Digi client logos)
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

