import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Process: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  const steps = [
    {
      step: '1',
      title: 'Discovery & Strategy',
      desc: 'We understand your brand, audience, goals, and constraints to define a clear ecommerce roadmap.'
    },
    {
      step: '2',
      title: 'Design & Build',
      desc: 'From UX wireframes to Shopify development, we craft experiences focused on usability and conversion.'
    },
    {
      step: '3',
      title: 'Launch & Optimize',
      desc: 'We launch with performance tracking in place and continuously optimize design and marketing efforts.'
    },
    {
      step: '4',
      title: 'Scale',
      desc: 'As data comes in, we refine campaigns, improve UX, and scale what works.'
    }
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            How We Work
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((item, index) => (
            <div key={index} className={`glass-card rounded-3xl p-6 reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className='glass-strong rounded-full w-12 h-12 flex items-center justify-center font-bold text-[#5A99FC] mb-4'>{item.step}</div>
              <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

