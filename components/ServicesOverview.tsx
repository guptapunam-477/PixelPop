import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen';

const ServicesOverview: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);

  const services = [
    {
      name: 'Shopify Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      points: [
        'Shopify store setup & launch',
        'Custom theme design & development',
        'App integrations & automation',
        'Store redesigns & migrations'
      ],
      cta: 'Explore Shopify Services',
      link: '/services/shopify-development'
    },
    {
      name: 'Growth Marketing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      points: [
        'Google Ads (Search, Shopping, Performance Max)',
        'Meta Ads (Facebook & Instagram)',
        'Conversion tracking & analytics',
        'Funnel optimization'
      ],
      cta: 'Explore Growth Marketing',
      link: '/services/growth-marketing'
    },
    {
      name: 'UI/UX Design',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5A99FC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      points: [
        'UX research & customer journey mapping',
        'UI design systems',
        'Mobile-first ecommerce design',
        'Conversion-focused layouts'
      ],
      cta: 'Explore UI/UX Design',
      link: '/services/ui-ux-design'
    }
  ];

  return (
    <section className='relative py-12 sm:py-16 md:py-20'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div ref={ref} className={`text-center mb-12 md:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black mb-4'>
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            We partner with ambitious ecommerce brands to handle everything required to grow a successful D2C business — from Shopify development to traffic acquisition and conversion optimization.
          </p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className={`glass-card rounded-3xl p-8 h-full flex flex-col reveal ${isVisible ? 'active' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="mb-6">
                <div className="glass rounded-2xl p-4 w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-[#1a202c]'>{service.name}</h3>
              <ul className='space-y-3 text-base text-gray-700 flex-grow mb-6'>
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-[#3CC61A] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to={service.link} className='btn-primary text-center'>
                {service.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

