
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const About: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref, 0.2);

    const whyPoints = [
        { title: 'Proven Track Record', text: '150+ successful projects across industries' },
        { title: 'Cutting-Edge Technology', text: 'Latest tools and frameworks for optimal performance' },
        { title: 'Dedicated Support', text: '24/7 assistance whenever you need us' },
    ];
    
    const processSteps = [
        { title: 'Discovery', text: 'Understanding your goals and challenges' },
        { title: 'Strategy', text: 'Crafting a tailored solution' },
        { title: 'Execution', text: 'Bringing your vision to life' },
        { title: 'Optimization', text: 'Continuous improvement for growth' },
    ];

  return (
    <section id='about' className='relative py-12 sm:py-16 md:py-20'>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className={`reveal ${isVisible ? 'active' : ''}`}>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-6'>
              Why Choose <span className="gradient-text">PixelPop Digi</span>?
            </h2>
            <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
              We're not just another agency. We're your digital transformation partners, committed to delivering exceptional results that drive your business forward.
            </p>
            <div className='space-y-4'>
            {whyPoints.map((point, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='glass-strong rounded-xl p-3 flex-shrink-0'>
                  <svg className='w-6 h-6 text-[#5A99FC]' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' /></svg>
                </div>
                <div>
                  <h3 className='font-bold text-lg mb-1'>{point.title}</h3>
                  <p className='text-gray-600'>{point.text}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className={`reveal ${isVisible ? 'active' : ''}`}>
            <div className='glass-card rounded-3xl p-8 relative overflow-hidden'>
              <div className='absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5A99FC] to-[#3CC61A] opacity-10 rounded-full -mr-32 -mt-32'></div>
              <div className='relative z-10'>
                <h3 className='text-3xl font-bold mb-6'>Our Process</h3>
                <div className='space-y-6'>
                {processSteps.map((step, index) => (
                  <div key={index}>
                    <div className='flex items-center gap-3 mb-2'>
                      <span className='glass-strong rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#5A99FC] flex-shrink-0'>{index + 1}</span>
                      <h4 className='font-bold text-lg'>{step.title}</h4>
                    </div>
                    <p className='text-gray-600 ml-[52px]'>{step.text}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
