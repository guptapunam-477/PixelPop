
import React, { useState, useEffect, useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const AnimatedStat: React.FC<{ target: number }> = ({ target }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
  
    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
  
        const updateCount = () => {
          start += increment;
          if (start < target) {
            setCount(Math.ceil(start));
            requestAnimationFrame(updateCount);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(updateCount);
      }
    }, [isVisible, target]);
  
    return <div ref={ref} className='text-3xl sm:text-4xl md:text-5xl font-black gradient-text'>{count}{target === 98 && '%'}</div>;
};

const Stats: React.FC = () => {
  const stats = [
    { target: 150, label: 'Projects Delivered' },
    { target: 98, label: 'Client Satisfaction' },
    { target: 50, label: 'Team Members' },
    { target: 5, label: 'Years Experience' },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 reveal ${isVisible ? 'active' : ''}`}>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className='text-center'>
              <AnimatedStat target={stat.target} />
              <p className='text-xs sm:text-sm md:text-base text-gray-600 font-medium mt-2'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
