import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen';

const FinalCTA: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center glass-card rounded-3xl p-12 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black mb-4'>
            Ready to Build or Scale Your <span className="gradient-text">Shopify Store?</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Whether you're launching a new D2C brand or optimizing an existing store, we help you grow with clarity, speed, and measurable results.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a href='https://calendly.com/pixel-pop-digital' target="_blank" rel="noopener noreferrer" className='btn-primary'>
              Book a Free Strategy Call
            </a>
            <Link to="/contact" className='btn-secondary'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

