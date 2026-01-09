import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const Differentiation: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  const points = [
    {
      title: 'Ecommerce-First Thinking',
      desc: "We don't build generic websites. Every design and marketing decision is made with ecommerce metrics in mind — conversion rate, AOV, CAC, and LTV."
    },
    {
      title: 'Design Meets Performance',
      desc: 'Our designers and marketers collaborate from day one, ensuring your store looks premium and performs profitably.'
    },
    {
      title: 'Transparent & Measurable',
      desc: 'Clear timelines, clear deliverables, and performance tracking that ties efforts to business outcomes.'
    },
    {
      title: 'Scalable Foundations',
      desc: 'We build systems that grow with your brand — technically, visually, and operationally.'
    }
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            Built for D2C. <span className="gradient-text">Obsessed with Results.</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {points.map((point, index) => (
            <div key={index} className={`glass-card rounded-3xl p-8 reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>{point.title}</h3>
              <p className='text-gray-700 leading-relaxed'>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

